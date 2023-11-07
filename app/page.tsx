import { Hero } from '@/components/hero'
import { HowToUse } from '@/components/how-to-use'
import { Preview } from '@/components/preview'
import { SongCard } from '@/components/song-card'
import { prisma } from '@/prisma'

export default async function Home() {
 
  const songs = await prisma.countrySong.findMany({
    take: 6,
    orderBy: {
      code: 'asc'
    }
  })

  return (
    <main className='max-w-[1000px] mx-auto px-4'>
      <Hero/>
      <HowToUse/>
      <Preview songs={songs}/>
    </main>
  )
}
