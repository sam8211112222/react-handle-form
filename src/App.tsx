import React from 'react';
import './App.css';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {

    const [books, setBooks] = React.useState<{ id: number, title: string }[]>([])

    const editBookById = (id: number, newTitle: string) => {
        setBooks(books.map(b => b.id === id ? {...b, title: newTitle} : b))
    }

    const deleteBookHandler = (bookId: number) => {
        setBooks(books.filter(b => b.id !== bookId))
    }

    const addBookHandler = async (title: string) => {
        const response = await axios.post('http://localhost:3001/books',{
            title
        })
        setBooks([...books, response.data])
    }

    return (
        <>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookHandler}/>
            <BookCreate onCreate={addBookHandler}/>
        </>
    );
}

export default App;
