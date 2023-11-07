
export const Header = ({ count }: { count: number }) => (
    <header className="mt-36 mb-20">
        <h1>
        Découvrez les mélodies qui représentent le pays
        </h1>
        <p className="text-card-foreground">
            Attention, les morceaux ici jouent avec les clichés et ne sont pas le reflet exact de la musique du pays en vedette. Pas de panique, c&apos;est juste pour le fun, pas pour vexer quelqu&apos;un !
        </p>
        <p className="text-card-foreground">
            <strong>{count}</strong> chansons
        </p>
    </header>
)