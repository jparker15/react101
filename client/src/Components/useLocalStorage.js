import {useState, useEffect} from 'react'

const getSavedValue =(key, initValue)=>{
    const savedVal = JSON.parse(localStorage.getItem(key))
    if(savedVal) return savedVal

    if(initValue instanceof Function) return initValue()


}

export default function useLocalStorage(key, initValue) {
    const [value, setValue] = useState(() =>{
        return getSavedValue(key,initValue)
    })

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    }, [value])

    return [value, setValue]
}