import React from 'react'
import { useTheme,useThemeUpdate } from '../hooks/ThemeContext'

export default function Control() {

    const theme = useTheme()

    const updateTheme = useThemeUpdate()

    return (
        <div>
            <h1>
                {theme ? "McLight Mode": "Mojave Mode"}
            </h1>

            <button
            onClick={updateTheme}
            
            >Toggle Theem</button>
        </div>
    )
}
