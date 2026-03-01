import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
export const dynamic = 'force-dynamic'
import { getUserAndRole } from '@/lib/auth'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const categoryId = (await params).id
    const category = await prisma.categories.findUnique({
      where: { id: categoryId },
      include: {
        registrations: {
          include: { athlete: { include: { unit: true } } }
        },
        matches: {
          orderBy: [{ round: 'asc' }, { match_order: 'asc' }],
          include: {
            player1: { include: { athlete: true } },
            player2: { include: { athlete: true } },
            winner: { include: { athlete: true } }
          }
        }
      }
    })

    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }

    return NextResponse.json(category)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch category' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const categoryId = (await params).id
    const body = await req.json()
    
    const updateData = { ...body }
    if (body.start_date) updateData.start_date = new Date(body.start_date)
    if (body.end_date) updateData.end_date = new Date(body.end_date)

    const category = await prisma.categories.update({
      where: { id: categoryId },
      data: updateData
    })
    
    return NextResponse.json(category)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update category' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const categoryId = (await params).id
    
    await prisma.categories.delete({
      where: { id: categoryId }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 })
  }
}
