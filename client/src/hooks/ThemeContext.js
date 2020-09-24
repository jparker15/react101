import React , { createContext,useContext,useEffect,useState } from "react";

const {get,set} = require("../utils/localStorage");

const ThemeContext = createContext();

const ThemeUpdateContext = createContext();

export function useTheme() {
    return useContext (ThemeContext)
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children} ){

    const [theme,setTheme] = useState ( ()=>{
        return get("theme", true) //set init theme to light mode change true value to string for using more then 2 themes

    })

    useEffect( ()=>{

        set("theme", JSON.stringify(theme))

        console.log(`Theme change:`, theme)

    }, [theme]) 

    const themeToggle = ()=>{
        setTheme(currTheme =>{return !currTheme})
    }

    return(
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={themeToggle}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}