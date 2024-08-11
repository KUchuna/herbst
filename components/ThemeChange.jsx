"use client"

import { useTheme } from 'next-themes'

export default function ThemeChanger() {
    
    const { theme, setTheme } = useTheme()

    function handleTheme() {
        if(theme == "dark") {
            setTheme("light")
        } else if(theme == "light") {
            setTheme("dark")
        }
    }

    return (
        <div>
            <button onClick={handleTheme}>
                theme change
            </button>
        </div>
    )
}