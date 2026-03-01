import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getUserAndRole } from '@/lib/auth'

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const unitId = (await params).id
    const body = await req.json()
    
    const unit = await prisma.units.update({
      where: { id: unitId },
      data: { name: body.name }
    })
    
    return NextResponse.json(unit)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update unit' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const unitId = (await params).id
    
    await prisma.units.delete({
      where: { id: unitId }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete unit' }, { status: 500 })
  }
}
