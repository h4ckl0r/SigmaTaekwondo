import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getUserAndRole } from '@/lib/auth'

async function clearForward(currentMatchId: string, oldWinnerId: string | null) {
   if (!oldWinnerId) return;
   
   const current = await prisma.matches.findUnique({ where: { id: currentMatchId } });
   if (!current || current.round >= 99) return; // ignore 3rd place matches

   const nextRound = current.round + 1;
   const nextOrder = Math.floor(current.match_order / 2);
   const isPlayer1InNext = current.match_order % 2 === 0;

   const nextMatch = await prisma.matches.findFirst({
        where: {
          category_id: current.category_id,
          round: nextRound,
          match_order: nextOrder
        }
   });

   if (!nextMatch) return;

   // If the old winner is in this next match
   if (
       (isPlayer1InNext && nextMatch.athlete1_registration_id === oldWinnerId) ||
       (!isPlayer1InNext && nextMatch.athlete2_registration_id === oldWinnerId)
   ) {
       const updateData: any = {}
       if (isPlayer1InNext) updateData.athlete1_registration_id = null;
       else updateData.athlete2_registration_id = null;

       if (nextMatch.status === 'FINISHED' || nextMatch.winner_id) {
           updateData.status = 'PENDING';
           updateData.winner_id = null;
           updateData.score1 = null;
           updateData.score2 = null;
           
           await clearForward(nextMatch.id, nextMatch.winner_id);
       } else {
           updateData.status = 'PENDING';
       }

       await prisma.matches.update({
           where: { id: nextMatch.id },
           data: updateData
       })
   }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role === 'VIEWER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const matchId = (await params).id
    const body = await req.json()
    const { score1, score2, winner_id, status } = body
    
    const currentMatch = await prisma.matches.findUnique({ 
        where: { id: matchId },
        include: { category: true }
    })
    
    if (!currentMatch) return NextResponse.json({ error: 'Match not found' }, { status: 404 })

    // If winner changed, clear forward path
    if (currentMatch.winner_id && currentMatch.winner_id !== winner_id) {
        await clearForward(currentMatch.id, currentMatch.winner_id)
    }

    const updatedMatch = await prisma.matches.update({
      where: { id: matchId },
      data: {
        score1: score1 !== undefined && score1 !== '' ? parseFloat(score1) : null,
        score2: score2 !== undefined && score2 !== '' ? parseFloat(score2) : null,
        winner_id,
        status: status || (winner_id ? 'FINISHED' : 'ONGOING')
      }
    })
    
    // Advance new winner
    if (winner_id && updatedMatch.round < 99) {
      const nextRound = currentMatch.round + 1
      const nextOrder = Math.floor(currentMatch.match_order / 2)
      const isPlayer1InNext = currentMatch.match_order % 2 === 0
      
      const nextMatch = await prisma.matches.findFirst({
        where: {
          category_id: currentMatch.category_id,
          round: nextRound,
          match_order: nextOrder
        }
      })
      
      if (nextMatch) {
         const updateData: any = {}
         if (isPlayer1InNext) updateData.athlete1_registration_id = winner_id;
         else updateData.athlete2_registration_id = winner_id;
         
         // Keep it pending if it wasn't finished
         if (nextMatch.status !== 'FINISHED') {
             updateData.status = 'PENDING'
         }

         await prisma.matches.update({
             where: { id: nextMatch.id },
             data: updateData
         })
      }
    }

    // Check for 3rd place match if semi-finals
    if (updatedMatch.round < 99) {
       const maxAthletes = parseInt(currentMatch.category.total_athletes.replace('A', '')) || 16;
       const numRounds = Math.log2(maxAthletes);
       
       if (updatedMatch.round === numRounds - 1) {
           const semiFinals = await prisma.matches.findMany({
               where: { category_id: currentMatch.category_id, round: numRounds - 1 }
           });

           if (semiFinals.length === 2 && semiFinals.every(m => m.status === 'FINISHED' && m.winner_id)) {
               const loser1 = semiFinals[0].winner_id === semiFinals[0].athlete1_registration_id 
                   ? semiFinals[0].athlete2_registration_id 
                   : semiFinals[0].athlete1_registration_id;
                   
               const loser2 = semiFinals[1].winner_id === semiFinals[1].athlete1_registration_id 
                   ? semiFinals[1].athlete2_registration_id 
                   : semiFinals[1].athlete1_registration_id;

               if (loser1 && loser2) {
                   const bronzeMatch = await prisma.matches.findFirst({
                       where: { category_id: currentMatch.category_id, round: 99 }
                   });

                   if (bronzeMatch) {
                       // Only update if it hasn't been played, or if the players changed!
                       if (bronzeMatch.athlete1_registration_id !== loser1 || bronzeMatch.athlete2_registration_id !== loser2) {
                           await prisma.matches.update({
                               where: { id: bronzeMatch.id },
                               data: {
                                   athlete1_registration_id: loser1,
                                   athlete2_registration_id: loser2,
                                   status: 'PENDING',
                                   winner_id: null,
                                   score1: null,
                                   score2: null
                               }
                           })
                       }
                   } else {
                       await prisma.matches.create({
                           data: {
                               category_id: currentMatch.category_id,
                               athlete1_registration_id: loser1,
                               athlete2_registration_id: loser2,
                               round: 99,
                               match_order: 0,
                               status: 'PENDING'
                           }
                       })
                   }
               }
           }
       }
    }

    return NextResponse.json(updatedMatch)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update match' }, { status: 500 })
  }
}
