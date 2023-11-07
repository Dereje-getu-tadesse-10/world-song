import { YoutubeEmbed } from "./youtube-embed";
import { buttonVariants } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Hand } from "lucide-react";
import { CountrySong, Link, Genre } from "@prisma/client";

type Song = CountrySong & {
    Link: Link[],
    Genre: Genre[]
}

export const SongInfo = ({ song, modal }: { song: Song, modal?: boolean }) => (
    <section className={`${modal === false && "md:my-40"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div
                className="col-span-1 md:col-span-1"
            >
                <h1>
                   {song.name}
                </h1>
                <p>
                    Titre: {song.songName === "" ? "Inconnu" : song.songName}
                </p>
                <p className="text-ellipsis overflow-hidden">
                    Par: {song.by.length === 0 ? "Inconnu" : song.by.join(", ")}
                </p>
                <p>
                    Date de sortie: {song.release === "" ? "Inconnue" : song.release}
                </p>
                <p>
                    Genres: {song?.Genre?.map((genre: any) => genre.name).join(", ")}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                    {song?.Link?.map((link: any, index: number) => (
                        <>
                            {link.link !== "?" && (
                                <a href={link.link} key={link.name} target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className:"no-underline" })}>
                                    {link.name}
                                </a>
                            )}
                        </>
                    ))}
                </div>
            </div>
            <div
                className="col-span-1 md:col-span-2"
            >
                {song?.Link && <YoutubeEmbed embedId={song.Link[1]?.link} title={song.name} />}
            </div>
        </div>
        <Alert className="mt-10">
        <Hand   className="h-4 w-4"/>
        <AlertTitle >
            Attention
        </AlertTitle>
        <AlertDescription>
        Il se peut que quelques morceaux soient un peu mystérieux, sans info sur l&apos;artiste ou le compositeur. C&apos;est parce que certains sont des vieux de la vieille et que dénicher des détails sur eux c&apos;est comme chercher une aiguille dans une botte de foin. Désolé pour le petit hic !
        </AlertDescription>
        </Alert>
    </section>
)