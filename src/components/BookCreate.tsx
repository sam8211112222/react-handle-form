import React, {ChangeEvent, FormEvent,} from "react";


interface BCProps{
    onCreate:(title: string) => void
}

const BookCreate = (props:BCProps) => {
    const {onCreate} = props
    const [title, setTitle] = React.useState<string>()

    const handleChange = (event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        setTitle(event.target.value)
    }

    const handleSubmit =(event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onCreate(title? title: "")
        setTitle('')
    }

    return <div className={"book-create"}>
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className={"input"} value={title} onChange={handleChange}/>
            <button className={"button"}>Create</button>
        </form>
    </div>
}

export default BookCreate
