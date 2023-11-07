import { prisma } from '@/prisma';

import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {

  const songs = await prisma.countrySong.findMany()

  return new Response(JSON.stringify({songs}))
}
