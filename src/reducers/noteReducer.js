
export const noteReducer = (state, action) => {
    const {payload, type} = action

    switch(type){
        case "ADDNOTE":
            return [...state, payload]
        case "DELETNOTE":
            return state.filter(notes => notes.id !== payload)
        default:
            return state
    }
}