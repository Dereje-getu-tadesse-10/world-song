import Link from "next/link";
import { SongCard } from "./song-card";
import { buttonVariants } from "./ui/button";
import { CountrySong } from "@prisma/client";

export const Preview = ({ songs }: { songs: CountrySong[] }) => (
    <div id="preview" className="my-20">
        <h3 className='mb-20 text-4xl font-extrabold text-center'>
            Aperçu musical des différents pays
        </h3>
        <SongCard songs={songs} />
        <Link 
        className={buttonVariants({ className:"mt-14 mx-auto !flex !items-center !max-w-max" })}
            href={`/songs`}
        >
            Voir plus de pays
        </Link>
    </div>
)