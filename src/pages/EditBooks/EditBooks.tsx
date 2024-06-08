import "./EditBook.scss"
import { ChangeEvent, useEffect, useState } from "react";

export type Book = {
    title: string;
    id: number;
    isbn: string;
    pageCount: number;
    authors: string[];
};

export const EditBooks = () => {
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState("");

    const fetchBooks = async () => {
        try {
            const res = await fetch(`https://fakeapi.extendsclass.com/books`, {
                method: "GET",
            });
            if (!res.ok) {
                throw new Error("Something went wrong");
            }
            const dataBooks = await res.json();
            console.log(dataBooks);
            if (Array.isArray(dataBooks) && dataBooks.length > 0) {
                setBook(dataBooks[0]);
            } else {
                setError("No books found");
            }
        } catch (error) {
            setError("Error fetching book details");
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBook((prev) => {
            if (prev) {
                if (name === "authors") {
                    const updatedAuthors = value.split(",").map(author => author.trim());
                    return { ...prev, authors: updatedAuthors };
                }
                const updatedBook = { ...prev, [name]: value };
                return updatedBook;
            }
            return prev;
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Book was updated");
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                {book ? (
                    <div className="inputs">
                        <label htmlFor="input-title">
                            <p>
                                <strong>Title:</strong>
                                <input
                                    className="input-title"
                                    value={book.title}
                                    name="title"
                                    onChange={handleEdit}
                                />
                            </p>
                        </label>
                        <label htmlFor="input-authors">
                            <p>
                                <strong>Authors:</strong>
                                <input
                                    className="input-authors"
                                    type="text"
                                    value={book.authors ? book.authors.join(", ") : ""}
                                    name="authors"
                                    onChange={handleEdit}
                                />
                            </p>
                        </label>
                        <label htmlFor="input-pageCount">
                            <p>
                                <strong>Page Count:</strong>
                                <input
                                    className="input-pageCount"
                                    type="text"
                                    value={book.pageCount}
                                    name="pageCount"
                                    onChange={handleEdit}
                                />
                            </p>
                        </label>
                        <label htmlFor="input-isbn">
                            <p>
                                <strong>ISBN:</strong>
                                <input
                                    className="input-isbn"
                                    type="text"
                                    value={book.isbn}
                                    name="isbn"
                                    onChange={handleEdit}
                                />
                            </p>
                        </label>
                        <label htmlFor="input-id">
                            <p>
                                <strong>ID:</strong>
                                <input
                                    className="input-id"
                                    type="text"
                                    value={book.id}
                                    name="id"
                                    onChange={handleEdit}
                                />
                            </p>
                        </label>
                    </div>
                ) : (
                    error ? <p>{error}</p> : <p>Loading...</p>
                )}
                <div>
                    <button type="submit" className="button-submit">
                        Submit
                    </button>
                </div>
            </form>
            {book && (
                <div className="updated-details">
                    <h2>Updated Book Details</h2>
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Authors:</strong> {book.authors ? book.authors.join(", ") : "N/A"}</p>
                    <p><strong>Page Count:</strong> {book.pageCount}</p>
                    <p><strong>ISBN:</strong> {book.isbn}</p>
                    <p><strong>ID:</strong> {book.id}</p>
                </div>
            )}
        </>
    );
};

export default EditBooks;
