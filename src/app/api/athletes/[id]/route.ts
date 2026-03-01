import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getUserAndRole } from '@/lib/auth'

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const athleteId = (await params).id
    const body = await req.json()
    
    const updateData = { ...body }
    if (body.birthday) updateData.birthday = new Date(body.birthday)

    const athlete = await prisma.athletes.update({
      where: { id: athleteId },
      data: updateData,
      include: { unit: true }
    })
    
    return NextResponse.json(athlete)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update athlete' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const athleteId = (await params).id
    
    await prisma.athletes.delete({
      where: { id: athleteId }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete athlete' }, { status: 500 })
  }
}
