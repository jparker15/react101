import {useState,useEffect} from 'react'
import { get, set } from '../utils/localStorage'

export default (initialValue) => {

    const [theme, setTheme] = useState( () =>{

        console.log("initial value is: ",get("theme",initialValue))
        

        return get("theme", initialValue)
    })

    useEffect(() => {
      console.log(`theme changed to ${theme}`)

      set("theme", theme)
    }, [theme])

    return [theme, setTheme]
}
