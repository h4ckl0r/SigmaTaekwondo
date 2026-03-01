import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Basic seeding logic for showcase
    const unit1 = await prisma.units.upsert({
      where: { name: 'CLB Taekwondo Hà Nội' },
      update: {},
      create: { name: 'CLB Taekwondo Hà Nội' }
    });
    
    const unit2 = await prisma.units.upsert({
      where: { name: 'CLB Taekwondo TP HCM' },
      update: {},
      create: { name: 'CLB Taekwondo TP HCM' }
    });

    await prisma.athletes.createMany({
      data: [
        { full_name: 'Nguyễn Văn A', gender: 'NAM', birthday: new Date('2000-05-15'), unit_id: unit1.id },
        { full_name: 'Trần Thị B', gender: 'NU', birthday: new Date('2002-08-20'), unit_id: unit2.id },
        { full_name: 'Lê Văn C', gender: 'NAM', birthday: new Date('2004-10-12'), unit_id: unit1.id },
        { full_name: 'Phạm Thị D', gender: 'NU', birthday: new Date('2001-03-25'), unit_id: unit2.id },
      ],
      skipDuplicates: true
    });

    await prisma.categories.upsert({
      where: { category_name: 'Giải vô địch Demo Kyorugi Nam U14' },
      update: {},
      create: {
        category_name: 'Giải vô địch Demo Kyorugi Nam U14',
        gender: 'NAM',
        type: 'KYORUGI',
        group_age: 'U14',
        bracket_type: 'BRACKET',
        total_athletes: 'A8',
        start_date: new Date(),
        end_date: new Date('2026-12-30')
      }
    });

    return NextResponse.json({ success: true, message: 'Seeded demo data successfully!' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
