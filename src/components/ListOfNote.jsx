import { useContext } from "react"
import { ContextNote } from "../context/ContextNote"
import ItemNote from "./ItemNote"

const ListOfNote = () => {
    const {initialState} = useContext(ContextNote)

    return(
        <>
        {
        initialState.map(note => (
            <div key={note.id}>
                <ItemNote note={note} />
            </div>
        ))
        }
        </>
    )
}

export default ListOfNote;