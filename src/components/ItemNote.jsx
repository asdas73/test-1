import BtnDeletNote from "./BtnDeletNote";


const ItemNote = ({note}) => {

    return(
        <>
            <label htmlFor="">
                <p>{note.descrip}</p>
                <BtnDeletNote note={note} />
            </label>
        </>
    )
}

export default ItemNote;