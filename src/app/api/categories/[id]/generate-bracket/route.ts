import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getUserAndRole } from '@/lib/auth'

function getSeeding(numPlayers: number) {
  let rounds = Math.log2(numPlayers);
  let pls = [1, 2];
  for (let i = 1; i < rounds; i++) {
    let nextPls: number[] = [];
    let sum = Math.pow(2, i + 1) + 1;
    for (let p of pls) {
      nextPls.push(p);
      nextPls.push(sum - p);
    }
    pls = nextPls;
  }
  return pls;
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    let body: any = {}
    try { body = await req.json() } catch(e) {}
    
    const manualOrder = body.manualOrder // array of IDs, length = maxAthletes
    
    const categoryId = (await params).id
    const category = await prisma.categories.findUnique({
      where: { id: categoryId },
      include: {
        registrations: { include: { athlete: true } },
        matches: true
      }
    })

    if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    if (category.matches.length > 0) return NextResponse.json({ error: 'Bracket already generated' }, { status: 400 })

    const maxAthletesStr = category.total_athletes.replace('A', '') // "A16" -> "16"
    const maxAthletes = parseInt(maxAthletesStr) || 16
    const numRounds = Math.log2(maxAthletes)

    // Validation
    const athletesCount = category.registrations.length
    if (maxAthletes === 4 && athletesCount < 2) return NextResponse.json({ error: 'Bảng 4: Tối thiểu 2 VĐV' }, { status: 400 })
    if (maxAthletes === 8 && athletesCount < 5) return NextResponse.json({ error: 'Bảng 8: Tối thiểu 5 VĐV' }, { status: 400 })
    if (maxAthletes === 16 && athletesCount < 9) return NextResponse.json({ error: 'Bảng 16: Tối thiểu 9 VĐV' }, { status: 400 })
    if (maxAthletes === 32 && athletesCount < 17) return NextResponse.json({ error: 'Bảng 32: Tối thiểu 17 VĐV' }, { status: 400 })

    let currentRoundPlayers = []

    if (manualOrder && Array.isArray(manualOrder)) {
        if (manualOrder.length !== maxAthletes) return NextResponse.json({ error: `Sơ đồ thủ công phải có đúng ${maxAthletes} vị trí` }, { status: 400 })
        currentRoundPlayers = manualOrder.map(id => {
            if (!id) return null
            return category.registrations.find(r => r.athlete.id === id) || null
        })
    } else {
        const shuffled = shuffleArray([...category.registrations])
        const seeds = getSeeding(maxAthletes)
        const playerDict: Record<number, any> = {}
        shuffled.forEach((ath, i) => {
            playerDict[i + 1] = ath
        })
        currentRoundPlayers = seeds.map(seed => playerDict[seed] || null)
    }

    let roundInputs = currentRoundPlayers.map(p => p ? p : { isBye: true })
    const allMatches: any[] = []

    for (let round = 1; round <= numRounds; round++) {
      const numMatchesInRound = maxAthletes / Math.pow(2, round)
      const nextRoundInputs = new Array(numMatchesInRound).fill(null)

      for (let order = 0; order < numMatchesInRound; order++) {
        let p1 = roundInputs[order * 2]
        let p2 = roundInputs[order * 2 + 1]

        let status = 'PENDING'
        let winner_id = null
        let r1_athlete = p1?.id ? p1 : null
        let r2_athlete = p2?.id ? p2 : null

        if (p1?.isBye && p2?.isBye) {
            status = 'FINISHED'
            winner_id = null
            nextRoundInputs[order] = { isBye: true }
        } else if (p1?.id && p2?.isBye) {
            status = 'FINISHED'
            winner_id = p1.id
            nextRoundInputs[order] = p1
        } else if (p1?.isBye && p2?.id) {
            status = 'FINISHED'
            winner_id = p2.id
            nextRoundInputs[order] = p2
        } else {
            status = 'PENDING'
            nextRoundInputs[order] = { isPending: true }
        }

        allMatches.push({
          category_id: categoryId,
          athlete1_registration_id: r1_athlete?.id ?? null,
          athlete2_registration_id: r2_athlete?.id ?? null,
          round,
          match_order: order,
          status,
          winner_id
        })
      }
      roundInputs = nextRoundInputs
    }

    await prisma.matches.createMany({
      data: allMatches
    })
    
    // Update category status update
    await prisma.categories.update({
      where: { id: categoryId },
      data: { status: 'PROGRESS' }
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to generate bracket' }, { status: 500 })
  }
}
