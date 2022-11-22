import React, {ChangeEvent} from "react";

interface BEProps{
    book:{ id: number, title: string }
    onSubmit: (id: number, title: string ) => void
}

const BookEdit = (props:BEProps) =>{
    const {book,onSubmit} = props
    const [title, setTitle] = React.useState(book.title);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }

    const handleSubmit = (event:ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault()
        console.log(book.id,book.title)
        onSubmit(book.id,title)
    }

    return <form className={"book-edit"} onSubmit={handleSubmit}>
        <label>Title</label>
        <input className={"input"} value={title} onChange={handleChange}/>
        <button className={"button is-primary"}>Save</button>
    </form>
}

export default BookEdit
