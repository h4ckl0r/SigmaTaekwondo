import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
export const dynamic = 'force-dynamic'
import { getUserAndRole } from '@/lib/auth'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const gender = searchParams.get('gender')
  const type = searchParams.get('type')
  const q = searchParams.get('q')

  try {
    const whereClause: any = {}
    if (gender) whereClause.gender = gender
    if (type) whereClause.type = type
    if (q) whereClause.category_name = { contains: q, mode: 'insensitive' }

    const categories = await prisma.categories.findMany({
      where: whereClause,
      include: {
        _count: {
          select: { registrations: true }
        }
      },
      orderBy: { created_at: 'desc' }
    })
    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await req.json()
    const category = await prisma.categories.create({
      data: Object.assign({}, body, {
        start_date: new Date(body.start_date),
        end_date: new Date(body.end_date)
      })
    })
    return NextResponse.json(category, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create category' }, { status: 500 })
  }
}
