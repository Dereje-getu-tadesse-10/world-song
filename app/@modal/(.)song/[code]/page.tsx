import { notFound } from "next/navigation"

import { SongInfo } from "@/components/song-info";
import Modal from "@/components/dialog";
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
        include: {
            Link: true,
            Genre: true,
        }
    })


    if (!countrie) {
        notFound()
    }


    return (
        <Modal>
            <SongInfo song={countrie} />
        </Modal>

    )
}