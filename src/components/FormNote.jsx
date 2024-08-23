import { useContext } from "react"
import { ContextNote } from "../context/ContextNote"
import { useForm } from "../hooks.js/formHooks"


const FormNote = () => {
    const {addNote} = useContext(ContextNote)

    const {setDescrip, inputHook, descrip} = useForm()

    const onSubmitHandler = e => {
        e.preventDefault()

        setDescrip("")

        const newNote = {
            id: crypto.randomUUID(),
            descrip,
            complit: false
        }

        addNote(newNote)
    }


    return(
        <form onSubmit={onSubmitHandler}>
            <input type="text" defaultValue={descrip} value={descrip} onChange={inputHook}/>
            <button className="btn-add">ADD</button>
        </form>
    )
}

export default FormNote;