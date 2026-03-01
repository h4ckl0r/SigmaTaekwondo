import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getUserAndRole } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { user, role } = await getUserAndRole()
    if (!user || (role !== 'ADMIN' && role !== 'ORGANIZER')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { athletes } = await req.json()
    
    if (!Array.isArray(athletes)) {
        return NextResponse.json({ error: 'Invalid data format' }, { status: 400 })
    }

    const dataToInsert = athletes.map((a: any) => ({
      full_name: a.full_name,
      gender: a.gender,
      birthday: new Date(a.birthday),
      unit_id: a.unit_id
    }))

    const result = await prisma.athletes.createMany({
      data: dataToInsert,
      skipDuplicates: true
    })

    return NextResponse.json({ success: true, count: result.count }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to import athletes' }, { status: 500 })
  }
}
