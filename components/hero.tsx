import Link from "next/link";

import { buttonVariants } from "@/components/ui/button"

export const Hero = () => (
    <div className="flex flex-col mt-36 mb-24">
        <div className="text-center" >
            <h1 className="text-4xl font-extrabold">
                Paris à Tokyo naviguez dans les clichés musicaux.
            </h1>
            <p className="mt-4 ">
            Voyagez à travers les mélodies qui font bouger le monde.
            </p>
        </div >
        <a 
            href={`/#preview`}
            className={buttonVariants({className:"max-w-max mx-auto mt-6"})}
        >
            Commencer à écouter

        </a>
        <p className="flex flex-col justify-center items-center gap-2 text-center text-sm mt-7 md:flex-row">
        Voyagez à travers les stéréotypes sonores du monde.
        </p>
    </div >
)