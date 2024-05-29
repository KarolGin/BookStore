import "./EditBook.scss"
import {ChangeEvent, useEffect, useState } from "react";

export type Book = {
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: number;
    isbn13: number;
}

export const EditBooks = () => {
    const [book, setBook] = useState<Book>();
    const fetchBooks = async () => {
    try {
        const res = await fetch(`https://api.itbook.store/1.0/books/9781617294136`, {
            method: "GET",
        });
        if(!res.ok){
        throw new Error(`Something goes wrong`);
    } 
        const dataBook = await res.json();

        if(dataBook) {
            setBook(dataBook);
        }
    } catch (error) {
        console.error(`Error fetching users:`, error);
    }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setBook((prev) => prev && {...prev, [name]: value,}
    );
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchBooks();
      };

      
    return (
        <>
        <form onSubmit={handleSubmit} className="form">
              {book ? (
                <div className="inputs">
                    <label htmlFor="input-title">
                        <p><strong>Title:</strong> 
                        <input className="input-title" value={book.title} name="title" onChange={handleEdit}></input></p>
                    </label>
                    <label htmlFor="input-subtitle">
                        <p><strong>SubTitle:</strong>
                        <input className="input-subtitle" type="text" value={book.subtitle} name="subtitle" onChange={handleEdit}/></p>
                    </label>
                    <label htmlFor="input-authors">
                        <p><strong>Authors:</strong>
                        <input className="input-authors" type="text" value={book.authors} name="autors" onChange={handleEdit}/></p>
                    </label>
                    <label htmlFor="input-publisher">
                        <p><strong>Publisher:</strong>
                        <input className="input-publisher" type="text" value={book.publisher} name="publisher" onChange={handleEdit}/></p>
                    </label>
                    <label htmlFor="">
                        <p><strong>ISBN-10:</strong>
                        <input className="input-isbn10" type="text" value={book.isbn10} name="isbn10" onChange={handleEdit}/></p>
                    </label>
                    <label htmlFor="input-isbn13">
                        <p><strong>ISBN-13:</strong>
                        <input className="input-isbn13" type="text" value={book.isbn13} name="isbn13" onChange={handleEdit}/></p>
                    </label>    
                    
                </div>
            ) : (
                <p>Loading...</p>
            )}
                <div>
                    <button type="submit" className="button-submit">Submit</button>
                </div>
            </form>
        </>
    );
}
export default EditBooks;