import React, {useEffect} from 'react';
import './App.css';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {

    const [books, setBooks] = React.useState<{ id: number, title: string }[]>([])

    const fetchBookas = async () =>{
        const response =await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(()=>{
        fetchBookas()
    },[])

    const editBookById = async (id: number, newTitle: string) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
        })
        // ...b 表示沒變動的資料
        // ...response.data 表示有變動過的資料
        setBooks(books.map(b => b.id === id ? {...b, ...response.data} : b))
    }

    const deleteBookHandler = async (bookId: number) => {
        await axios.delete(`http://localhost:3001/books/${bookId}`)
        setBooks(books.filter(b => b.id !== bookId))
    }

    const addBookHandler = async (title: string) => {
        const response = await axios.post('http://localhost:3001/books',{
            title
        })
        setBooks([...books, response.data])
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookHandler}/>
            <BookCreate onCreate={addBookHandler}/>
        </div>
    );
}

export default App;
