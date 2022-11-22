import React from 'react';
import './App.css';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

    const [books, setBooks] = React.useState<{ id: number, title: string }[]>([])

    const editBookById = (id: number, newTitle: string) => {
        setBooks(books.map(b => {
            if (b.id === id) {
                return {...b, title: newTitle}
            }
            return b
        }))
    }

    const deleteBookHandler = (bookId: number) => {
        setBooks(books.filter(b => b.id !== bookId))
    }

    const addBookHandler = (title: string) => {
        setBooks([...books, {
            id: Math.round(Math.random() * 9999),
            title: title
        }
        ])
    }

    return (
        <>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookHandler}/>
            <BookCreate onCreate={addBookHandler}/>
        </>
    );
}

export default App;
