import headerlogo from '@/public/assets/headerlogo.svg'
import Image from 'next/image'
import ThemeChanger from './ThemeChange'
import HeaderButton from './HeaderButton'

export default function Header() {
    return (
        <header className='flex justify-center pt-[34px] font-lato'>
            <div className='flex items-center bg-secondary-light rounded-[20px] py-[12px] px-[16px]'>
                <Image src={headerlogo} alt='herbst' />
                <ul className="flex gap-[24px] ml-[24px]">
                    <li className="cursor-pointer text-lg">Über uns</li>
                    <li className='cursor-pointer text-lg'>Referenzprojekte</li>
                    <li className='cursor-pointer text-lg'>Leistungen</li>
                    <li className='cursor-pointer text-lg'>Team</li>
                    <li className='cursor-pointer text-lg'><ThemeChanger  /></li>
                </ul>
                <HeaderButton />
            </div>
        </header>
    )
}