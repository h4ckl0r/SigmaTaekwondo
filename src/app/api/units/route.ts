import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
export const dynamic = 'force-dynamic'
import { getUserAndRole } from '@/lib/auth'

export async function GET() {
  try {
    // Viewer mostly doesn't need to be checked for basic GET, assuming it's public
    const units = await prisma.units.findMany({
      include: {
        _count: {
          select: { athletes: true }
        }
      },
      orderBy: { created_at: 'desc' }
    })
    return NextResponse.json(units)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch units' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await req.json()
    const unit = await prisma.units.create({
      data: {
        name: body.name
      }
    })
    return NextResponse.json(unit, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create unit' }, { status: 500 })
  }
}
