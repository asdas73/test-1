import { useState } from "react"


export const useForm = () => {
    const [descrip, setDescrip] = useState("")

    const inputHook = (e) => {
        setDescrip(e.target.value)
    }

    return{
        setDescrip,
        inputHook,
        descrip
    }
}