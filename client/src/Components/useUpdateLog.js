import {useEffect} from "react"

export default function useUdateLog(value){
    useEffect(() => {
        console.log(value)
    }, [value])
}