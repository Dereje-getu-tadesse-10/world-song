import { CircleDot, ListMusic, Music2, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


const icons = [
    {
        icon: <CircleDot />,
    },
    {
        icon: <Music2 />,
    },
    {
        icon: <ListMusic />,
    },
    {
        icon: <Sparkles />,
    }
]

const howToUse = [
    {
        "title": "Choisissez votre pays",
        "description": "Sélectionnez un pays, découvrez sa musique stéréotypée."
    },
    {
        "title": "Écoutez la musique",
        "description": "Découvrez la musique stéréotypée du pays et explorez les infos associées."
    },
    {
        "title": "Playlist",
        "description": "Toutes les chansons vous attendent dans nos playlists Spotify."
    },
    {
        "title": "Partager",
        "description": "Partagez les découvertes musicales avec vos amis."
    }
]

export const HowToUse = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
            {howToUse.map((item, index) => (
                <Card key={item.title}>
                    <CardHeader className="flex flex-row gap-2 items-center">
                        {icons[index].icon}
                        <CardTitle className="!my-0 text-mandy-600">
                            {item.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="my-0 text-card-foreground">{item.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}