import React, {ChangeEvent} from "react";

interface BEProps{
    book:{ id: number, title: string }
    onEdit:any
    onSubmit:any
}

const BookEdit = (props:BEProps) =>{
    const {book,onEdit,onSubmit} = props
    const [title, setTitle] = React.useState(book.title);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }

    const handleSubmit = (event:ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault()
        onEdit(book.id,title)
        onSubmit()
    }

    return <form className={"book-edit"} onSubmit={handleSubmit}>
        <label>Title</label>
        <input className={"input"} value={title} onChange={handleChange}/>
        <button className={"button is-primary"}>Save</button>
    </form>
}

export default BookEdit
