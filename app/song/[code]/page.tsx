import { notFound } from "next/navigation"

import { SongInfo } from "@/components/song-info";
import { prisma } from "@/prisma";

export const runtime = 'edge';

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