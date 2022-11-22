import BookShow from "./BookShow";

interface BLProps {
    books: { id: number, title: string }[]
    onDelete:(id: number) => void
    onEdit:any
}


const BookList = (props: BLProps) => {
    const {books,onDelete,onEdit} = props
    return <div className={"book-list"}>
        {books.map(b => <BookShow onEdit={onEdit} onDelete={onDelete} book={b} key={b.id}/>)}
    </div>
}

export default BookList
