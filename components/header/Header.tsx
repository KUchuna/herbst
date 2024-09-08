import headerlogo from '@/public/assets/headerlogo.svg';
import Image from 'next/image';
import ThemeChanger from '../ThemeChange';
import HeaderButton from './HeaderButton';
import Link from 'next/link';

export default function Header() {
    return (
        <header
            className="flex justify-center py-2 font-lato sticky top-0 z-50" id='header'>
            <div className='flex items-center bg-secondary-light rounded-[20px] py-[12px] px-[16px]'>
                <Link href="/"><Image src={headerlogo} alt='herbst' /></Link>
                <ul className="flex items-center gap-[24px] ml-[24px]">
                    <li className="cursor-pointer text-lg"><Link href="/about">Über uns</Link></li>
                    <li className='cursor-pointer text-lg'>Referenzprojekte</li>
                    <li className='cursor-pointer text-lg'>Leistungen</li>
                    <li className='cursor-pointer text-lg'><Link href="/team">Team</Link></li>
                    <li className='cursor-pointer'><ThemeChanger /></li>
                </ul>
                <HeaderButton 
                    styles="bg-primary-light text-white ml-44 py-3 px-4 rounded-xl"
                />
            </div>
        </header>
    );
}
