import { t } from "i18next";
import { HamburgerMenu } from "../../components/Nav/HamburgerMenu/HamburgerMenu";
import "./EditBook.scss"
import { ChangeEvent, useEffect, useState } from "react";
import { TranslateButtons } from "../../components/TranslateButtons/TranslateButtons";
import { useTranslation } from "react-i18next";

export type Book = {
    title: string;
    id: number;
    isbn: string;
    pageCount: number;
    authors: string[];
    availableCopies: number;
};

export const EditBooks = () => {
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState("");
    const { t, i18n } = useTranslation();

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
        
            <div className="hamburger-menu-container">
                <HamburgerMenu />
                    <div className="translate-button"> 
                        <TranslateButtons />
                    </div>
            </div>
            <form onSubmit={handleSubmit} className="form">
                {book ? (
                    <div className="inputs">
                        <label htmlFor="input-title">
                            <strong>{t(`title`)}</strong>
                            <input
                                className="input-title"
                                value={book.title}
                                name="title"
                                onChange={handleEdit}
                            />
                        </label>
                        <label htmlFor="input-authors">
                            <strong>{t(`authors`)}:</strong>
                            <input
                                className="input-authors"
                                type="text"
                                value={book.authors ? book.authors.join(", ") : ""}
                                name="authors"
                                onChange={handleEdit}
                            />
                        </label>
                        <label htmlFor="input-pageCount">
                            <strong>{t(`pages`)}</strong>
                            <input
                                className="input-pageCount"
                                type="text"
                                value={book.pageCount}
                                name="pageCount"
                                onChange={handleEdit}
                            />
                        </label>
                        <label htmlFor="input-isbn">
                            <strong>ISBN:</strong>
                            <input
                                className="input-isbn"
                                type="text"
                                value={book.isbn}
                                name="isbn"
                                onChange={handleEdit}
                            />
                        </label>
                        <label htmlFor="input-id">
                            <strong>ID:</strong>
                            <input
                                className="input-id"
                                type="text"
                                value={book.id}
                                name="id"
                                onChange={handleEdit}
                            />
                        </label>
                    </div>
                ) : (
                    error ? <p>{error}</p> : <p>Loading...</p>
                )}
                <div>
                    <button type="submit" className="button-submit">
                        {t(`submit`)}
                    </button>
                </div>
            </form>
            {book && (
                <div className="updated-details">
                    <h2>{t(`updatedBookDetails`)}</h2>
                    <p><strong>{t(`title`)}</strong> {book.title}</p>
                    <p><strong>{t(`authors`)}:</strong> {book.authors ? book.authors.join(", ") : "N/A"}</p>
                    <p><strong>{t(`pages`)}</strong> {book.pageCount}</p>
                    <p><strong>ISBN:</strong> {book.isbn}</p>
                    <p><strong>ID:</strong> {book.id}</p>
                </div>
            )}
        </>
    );
};

export default EditBooks;
