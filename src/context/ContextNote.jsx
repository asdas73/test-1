import { createContext, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";

export const ContextNote = createContext(null)

const ContextNoteProvider = ({children}) => {
    const initialValue = []
    
    const [initialState, dispatch] = useReducer(noteReducer, initialValue)


    const addNote = newNote =>{
        dispatch({
            type: "ADDNOTE",
            payload: newNote
        })
    }

    const deletNote = id => {
        dispatch({
            type: "DELETNOTE",
            payload: id
        })
    }

    console.log(initialState)

    return(
        <ContextNote.Provider value={{
            initialState,
            deletNote,
            addNote
        }}>
            {children}
        </ContextNote.Provider>
    )
}

export default ContextNoteProvider;