
export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="px-4">
        <div className="flex items-center flex-wrap justify-between w-full h-24 border-t max-w-[1120px] mx-auto">
            <p className="text-slate-600">
                &copy; {currentYear} <span >Dito.</span>
            </p>
            <a
                className="flex items-center gap-1 text-slate-600"
                href="https://dereje.fr"
                target="_blank"
                rel="noopener noreferrer"
            >
                Build with 🤍 by{" "}{" "} Dereje
            </a>
            </div>
        </footer>
    )
}