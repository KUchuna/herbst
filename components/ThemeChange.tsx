"use client"

import { useTheme } from 'next-themes'

export default function ThemeChanger() {
    
    const { setTheme } = useTheme()
    const {resolvedTheme} = useTheme()

    function handleTheme() {
        if(resolvedTheme == "dark") {
            setTheme("light")
        } else if(resolvedTheme == "light") {
            setTheme("dark")
        }
        console.log(resolvedTheme)
    }

    return (
        <div>
            <button onClick={handleTheme}>
                theme change
            </button>
        </div>
    )
}