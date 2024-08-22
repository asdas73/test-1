import { useContext } from "react";
import { ContextNote } from "../context/ContextNote";

const BtnDeletNote = ({note}) => {
    const {deletNote} = useContext(ContextNote)

    return (

        <button onClick={() => deletNote(note.id)}>Delete</button>

    )
}

export default BtnDeletNote;