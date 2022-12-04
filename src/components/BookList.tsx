import BookShow from "./BookShow";
import {useContext} from "react";
import BookContext from "../context/BookContext";

interface BLProps {
    books: { id: number, title: string }[]
    onDelete:(id: number) => void
    onEdit:(id:number, title:string) => void
}


const BookList = (props: BLProps) => {
    const {books,onDelete,onEdit} = props

    const {count,incrementCount} = useContext(BookContext)

    return <div className={"book-list"}>
        {count}
        {<button onClick={incrementCount}> incrementCount </button>}
        {books.map(b => <BookShow onEdit={onEdit} onDelete={onDelete} book={b} key={b.id}/>)}
    </div>
}

export default BookList
