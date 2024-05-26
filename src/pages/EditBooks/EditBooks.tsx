import {ChangeEvent, PropsWithChildren, useEffect, useState } from "react";

export type Book = {
    error: number;
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: number;
    isbn13: number;
    pages: number;
    year: number
    rating: number
    desc: string;
    price: string
    image: string;
    url: string;
    pdf: {
              "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
              "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
           }
}

export const EditBooks = () => {
    const [book, setBook] = useState<Book>();

    const fetchUsers = async () => {
    try {
        const res = await fetch(`https://api.itbook.store/1.0/books/9781617294136`, {
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
        fetchUsers();
    }, []);

    const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setBook((prev) => prev && {...prev, [name]: value,}
    );
    };


    return (
        <>
              {book ? (
                <div>
                    {/* <input value={book.title} name="title" onChange={handleEdit}></input>
                    logika jest, ale do przerobienia */}
                    <h1>{book.title}</h1>
                    <h2>{book.subtitle}</h2>
                    <p><strong>Authors:</strong> {book.authors}</p>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p><strong>ISBN-10:</strong> {book.isbn10}</p>
                    <p><strong>ISBN-13:</strong> {book.isbn13}</p>
                    <p><strong>Pages:</strong> {book.pages}</p>
                    <p><strong>Year:</strong> {book.year}</p>
                    <p><strong>Rating:</strong> {book.rating}</p>
                    <p><strong>Description:</strong> {book.desc}</p>
                    <p><strong>Price:</strong> {book.price}</p>
                    <p><strong>Image URL:</strong> <a href={book.image} target="_blank" rel="noopener noreferrer">{book.image}</a></p>
                    <p><strong>Book URL:</strong> <a href={book.url} target="_blank" rel="noopener noreferrer">{book.url}</a></p>
                    <div>
                        <h3>PDF Chapters:</h3>
                        <ul>
                            {Object.entries(book.pdf).map(([chapter, url]) => (
                                <li key={chapter}>
                                    <a href={url} target="_blank" rel="noopener noreferrer">{chapter}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
export default EditBooks;