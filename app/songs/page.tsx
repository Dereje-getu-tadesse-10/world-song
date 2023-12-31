import { Header } from '@/components/header'
import { SongCard } from '@/components/song-card'
import { prisma } from '@/prisma'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Pays et musiques',
    description: 'Retrouvez les musiques typiques de chaque pays',
  }
  
const Songs = async () => {

    const countries = await prisma.countrySong.findMany({
        select:{
            by: true,
            code: true,
            name: true,
            release: true,
            songName: true,
            id: true,
            _count: true,
            Link: true,
            Genre: true,
        },
        orderBy: {
            code: 'asc'
        }
    })

    return (
        <main className='max-w-[1000px] mx-auto px-4'>
            <Header count={countries.length}/>
            <SongCard songs={countries} />
        </main>
    )
}

export default Songs