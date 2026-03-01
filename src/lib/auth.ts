import { createClient } from './supabase/server'
import prisma from './prisma'

export async function getUserAndRole() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { user: null, role: null }
  
  const profile = await prisma.profiles.findUnique({
    where: { id: user.id }
  })
  
  return { user, role: profile?.role ?? 'VIEWER' }
}

export async function requireAuth() {
  const { user, role } = await getUserAndRole()
  if (!user) {
    throw new Error('Unauthorized')
  }
  return { user, role }
}
