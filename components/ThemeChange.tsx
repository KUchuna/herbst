"use client"

import { useTheme } from 'next-themes'
import dark from "@/public/assets/dark.svg"
import light from "@/public/assets/light.svg"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ThemeChanger() {
    
    const { setTheme } = useTheme()
    const {resolvedTheme} = useTheme()
    const [icon, setIcon] = useState(light)

    useEffect(() => {
        resolvedTheme == "dark" ? setIcon(dark) : setIcon(light)
    },[resolvedTheme])

    function handleTheme() {
        if(resolvedTheme == "dark") {
            setTheme("light")
        } else if(resolvedTheme == "light") {
            setTheme("dark")
        }
    }

    return (
        <div className='hover:bg-zinc-300 rounded-full p-2' onClick={handleTheme}>
            <Image src={icon} alt='Change theme' className='select-none' />
        </div>
        )
}