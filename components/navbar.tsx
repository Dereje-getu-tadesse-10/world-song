import Link from 'next/link';
import { ToggleTheme } from './toggle-theme';

const pageLinks = [
    { name: 'Pays', link: '/songs' },
];

export const Navbar = () => (
        <header className='fixed top-0 left-0 right-0 z-50 max-w-[1120px] mx-auto flex items-center justify-between w-full px-4 py-4 bg-transparent h-24'>
            <nav className='h-full w-full rounded-full bg-card border shadow flex justify-between items-center'>
                <div className='pl-8'>
                    <Link href='/'>
                        <h1 className='mb-0 font-bold text-xl'>WS</h1>
                    </Link>
                </div>
                <ul className='flex items-center pr-8'>
                    {pageLinks.map(link => (
                        <li key={link.name}>
                            <Link href={link.link} className='relative block pl-4 transition font-medium'>
                                    {link.name}
                            </Link>
                        </li>
                    ))}
                    <ToggleTheme />
                </ul>
            </nav>
        </header>
);

