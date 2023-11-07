"use client"
import LiteYouTubeEmbed from "react-lite-youtube-embed";


export const videoId = (url: string) => {
    const regex = /(?:\?v=|&v=|youtu\.be\/)(.*?)(?:\?|&|$)/;
    const match = url.match(regex);
    return match ? match[1] : '';
};

export const YoutubeEmbed = ({ embedId, title }: { embedId: string, title: string }) => (
    <LiteYouTubeEmbed
        id={videoId(embedId)}
        title={title}
    />
)