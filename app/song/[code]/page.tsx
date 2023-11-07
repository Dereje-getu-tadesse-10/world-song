import { notFound } from "next/navigation"

import { SongInfo } from "@/components/song-info";
import { prisma } from "@/prisma";
import type { Metadata, ResolvingMetadata } from 'next'


export const runtime = 'edge';

export async function generateMetadata(
    { params }: {params: { code: string }} ,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const id = params.code
   
    const countrie = await prisma.countrySong.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            by: true,
            code: true,
            name: true,
            release: true,
            songName: true,
            Link: true,
            Genre: true,
        }
    })


   
    return {
      title: `${countrie?.name} - ${countrie?.songName}`,
      description: `Découvrez ${countrie?.songName} par ${countrie?.by.join(", ")} de ${countrie?.name}`,
    }
  }
   

export default async function SongPage({
    params: { code },
}: {
    params: { code: string },
}) {

    const countrie = await prisma.countrySong.findUnique({
        where: {
            id: code,
        },
        select: {
            id: true,
            by: true,
            code: true,
            name: true,
            release: true,
            songName: true,
            Link: true,
            Genre: true,
        }
    })


    if (!countrie) {
        notFound()
    }

    return (
        <main className='max-w-[1000px] mx-auto px-4'>
            <SongInfo song={countrie} modal={false} />
        </main>
    )
}