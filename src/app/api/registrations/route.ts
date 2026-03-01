import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getUserAndRole } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { category_id, athlete_id } = await req.json()
    
    // Check max capacity
    const category = await prisma.categories.findUnique({
      where: { id: category_id },
      include: { _count: { select: { registrations: true } } }
    })
    
    if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    
    const maxAthletes = parseInt(category.total_athletes) // '16' -> 16
    if (category._count.registrations >= maxAthletes) {
      return NextResponse.json({ error: 'Category is full' }, { status: 400 })
    }
    
    const registration = await prisma.registrations.create({
      data: {
        category_id,
        athlete_id
      }
    })
    
    return NextResponse.json(registration, { status: 201 })
  } catch (error: any) {
    // Unique constraint violation error handle
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Athlete already registered in this category' }, { status: 400 })
    }
    return NextResponse.json({ error: error.message || 'Failed to create registration' }, { status: 500 })
  }
}
