import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { id, full_name, email } = await req.json()
    
    if (!id || !email) {
      return NextResponse.json({ error: 'Missing user data' }, { status: 400 })
    }

    // Default role is VIEWER as specified in schema
    const newProfile = await prisma.profiles.create({
      data: {
        id,
        full_name: full_name || email.split('@')[0],
        role: 'VIEWER'
      }
    })

    return NextResponse.json({ success: true, profile: newProfile }, { status: 201 })
  } catch (error) {
    console.error('Error creating user profile:', error)
    return NextResponse.json({ error: 'Failed to create user profile' }, { status: 500 })
  }
}
