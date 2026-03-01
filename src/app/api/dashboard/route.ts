import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const revalidate = 30 // Cache for 30 seconds

export async function GET() {
  try {
    const [totalAthletes, totalUnits, totalCategories, totalMatches] = await Promise.all([
      prisma.athletes.count(),
      prisma.units.count(),
      prisma.categories.count(),
      prisma.matches.count()
    ])

    // Group athletes by unit for chart
    const athletesByUnit = await prisma.units.findMany({
      include: {
        _count: {
          select: { athletes: true }
        }
      },
      orderBy: {
        athletes: {
          _count: 'desc'
        }
      },
      take: 5
    })

    const chartData = athletesByUnit.map(unit => ({
      name: unit.name,
      vdv: unit._count.athletes
    }))

    // Calculate medal standings
    const finishedCategories = await prisma.categories.findMany({
      where: { status: 'FINISHED' },
      include: {
        matches: {
          include: {
            player1: { include: { athlete: { include: { unit: true } } } },
            player2: { include: { athlete: { include: { unit: true } } } },
            winner: { include: { athlete: { include: { unit: true } } } }
          }
        }
      }
    })

    const unitMedals: Record<string, { name: string, gold: number, silver: number, bronze: number, total: number }> = {}

    for (const cat of finishedCategories) {
      if (!cat.matches || cat.matches.length === 0) continue

      const mainMatches = cat.matches.filter(m => m.round < 99 && m.status === 'FINISHED')
      const maxRound = mainMatches.length > 0 ? Math.max(...mainMatches.map(m => m.round)) : -1
      const finalMatch = mainMatches.find(m => m.round === maxRound)
      const bronzeMatch = cat.matches.find(m => m.round === 99 && m.status === 'FINISHED')

      if (finalMatch && finalMatch.winner_id) {
        // Gold
        const goldWinner = finalMatch.winner
        const silverLoser = finalMatch.winner_id === finalMatch.athlete1_registration_id ? finalMatch.player2 : finalMatch.player1

        if (goldWinner && goldWinner.athlete) {
          const uId = goldWinner.athlete.unit_id
          if (!unitMedals[uId]) unitMedals[uId] = { name: goldWinner.athlete.unit.name, gold: 0, silver: 0, bronze: 0, total: 0 }
          unitMedals[uId].gold += 1
          unitMedals[uId].total += 1
        }

        if (silverLoser && silverLoser.athlete) {
          const uId = silverLoser.athlete.unit_id
          if (!unitMedals[uId]) unitMedals[uId] = { name: silverLoser.athlete.unit.name, gold: 0, silver: 0, bronze: 0, total: 0 }
          unitMedals[uId].silver += 1
          unitMedals[uId].total += 1
        }
      }

      if (bronzeMatch && bronzeMatch.winner_id && bronzeMatch.winner) {
         const bronzeWinner = bronzeMatch.winner
         if (bronzeWinner.athlete) {
           const uId = bronzeWinner.athlete.unit_id
           if (!unitMedals[uId]) unitMedals[uId] = { name: bronzeWinner.athlete.unit.name, gold: 0, silver: 0, bronze: 0, total: 0 }
           unitMedals[uId].bronze += 1
           unitMedals[uId].total += 1
         }
      }
    }

    const medalStandings = Object.values(unitMedals).sort((a, b) => {
      if (b.gold !== a.gold) return b.gold - a.gold
      if (b.silver !== a.silver) return b.silver - a.silver
      return b.bronze - a.bronze
    }).slice(0, 5) // top 5
    
    return NextResponse.json({
      stats: {
        totalAthletes,
        totalUnits,
        totalCategories,
        totalMatches
      },
      chartData,
      medalStandings
    })
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return NextResponse.json({ error: 'Failed to load stats' }, { status: 500 })
  }
}
