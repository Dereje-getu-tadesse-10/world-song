import { notFound } from "next/navigation"

import { SongInfo } from "@/components/song-info";
import { prisma } from "@/prisma";


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

    console.log(countrie)

    return (
        <main className='max-w-[1000px] mx-auto px-4'>
            <SongInfo song={countrie} modal={false} />
        </main>
    )
}