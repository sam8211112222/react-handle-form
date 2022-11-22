import {useState} from "react";
import BookEdit from "./BookEdit";

interface BSProps {
    book: { id: number, title: string }
    onDelete: (id: number) => void
    onEdit:(id:number, title:string) => void
}

const BookShow = (props: BSProps) => {
    const {book, onDelete, onEdit} = props
    const [showEdit, setShowEdit] = useState<boolean>(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit =(id:number,newTitle:string)=>{
        setShowEdit(false)
        onEdit(id,newTitle)
    }

    let content: JSX.Element = <h3>{book.title}</h3>
    if (showEdit){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        content = <BookEdit onSubmit={handleSubmit}  book={book}/>
    }
    return <div className={"book-show"}>
        {content}
        <div className={"actions"}>
            <button className={"edit"} onClick={handleEditClick}>Edit</button>
            <button className={"delete"} onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}

export default BookShow
