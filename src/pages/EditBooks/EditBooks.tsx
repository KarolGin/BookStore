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

    const fetchBooks = async () => {
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
        <form onSubmit={handleSubmit}>
              {book ? (
                <div>
                    <h1><strong>Title:</strong> <input value={book.title} name="title" onChange={handleEdit}></input></h1>
                    <h2><strong>SubTitle:</strong> <input type="text" value={book.subtitle} name="subtitle" onChange={handleEdit}/></h2>
                    <p><strong>Authors:</strong> <input type="text" value={book.authors} name="autors" onChange={handleEdit}/></p>
                    <p><strong>Publisher:</strong> <input type="text" value={book.publisher} name="publisher" onChange={handleEdit}/></p>
                    <p><strong>ISBN-10:</strong> <input type="text" value={book.isbn10} name="isbn10" onChange={handleEdit}/></p>
                    <p><strong>ISBN-13:</strong> <input type="text" value={book.isbn13} name="isbn13" onChange={handleEdit}/></p>
                    <p><strong>Pages:</strong> <input type="text" value={book.pages} name="pages" onChange={handleEdit}/></p>
                    <p><strong>Year:</strong> <input type="text" value={book.year} name="year" onChange={handleEdit}/></p>
                    <p><strong>Rating:</strong> <input type="text" value={book.rating} name="rating" onChange={handleEdit}/></p>
                    <p><strong>Description:</strong> <input type="text" value={book.desc} name="desc" onChange={handleEdit}/></p>
                    <p><strong>Price:</strong> <input type="text" value={book.price} name="price" onChange={handleEdit}/></p>
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
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}
export default EditBooks;