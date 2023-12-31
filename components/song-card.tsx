import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {CountrySong} from "@prisma/client"

// @ts-ignore
import Flag from 'react-world-flags'


type Props = {
    songs: CountrySong[];
}

export const SongCard = ({ songs }: Props) => (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-24'>
        {songs.map((song, index) => (
            <Link className="no-underline" href={`/song/${song.id}`} key={index}>
                <Card className="cursor-pointer">
                    <CardHeader>
                        <div className="flex gap-4 items-center">
                        <Flag className="h-7 my-0" code={song.code} />
                        <CardTitle className="my-0 text-card-foreground">{song.name}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2.5">
                    <CardDescription className="my-0 text-card-foreground">
                        {song.songName}
                    </CardDescription>
                    <CardDescription className="my-0 text-card-foreground">
                        par <strong>{song.by.length === 0 ? "Inconnu" : song.by.join(", ")}</strong>
                    </CardDescription>
                    </CardContent>
                </Card>
            </Link>
        ))}
    </div>
)