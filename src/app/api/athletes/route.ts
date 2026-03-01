import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
export const dynamic = 'force-dynamic'
import { getUserAndRole } from '@/lib/auth'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const unitId = searchParams.get('unitId')
  const q = searchParams.get('q')
  const fetchAll = searchParams.get('fetchAll') === 'true'
  const page = parseInt(searchParams.get('page') || '1')
  const limit = fetchAll ? undefined : 50
  const skip = fetchAll ? undefined : (page - 1) * limit

  try {
    const whereClause: any = {}
    if (unitId) whereClause.unit_id = unitId
    if (q) whereClause.full_name = { contains: q, mode: 'insensitive' }

    const athletes = await prisma.athletes.findMany({
      where: whereClause,
      include: {
        unit: true
      },
      ...(!fetchAll && { skip, take: limit }),
      orderBy: { created_at: 'desc' }
    })

    const total = await prisma.athletes.count({ where: whereClause })

    return NextResponse.json({
      data: athletes,
      meta: {
        total,
        page,
        totalPages: fetchAll ? 1 : Math.ceil(total / (limit || 50))
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch athletes' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await req.json()
    const athlete = await prisma.athletes.create({
      data: {
        ...body,
        birthday: new Date(body.birthday)
      },
      include: {
        unit: true
      }
    })
    return NextResponse.json(athlete, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create athlete' }, { status: 500 })
  }
}
