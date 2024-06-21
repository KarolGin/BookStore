import { t } from "i18next";
import { HamburgerMenu } from "../../components/Nav/HamburgerMenu/HamburgerMenu";
import "./EditBook.scss";
import { useContext, useEffect, useState } from "react";
import { TranslateButtons } from "../../components/TranslateButtons/TranslateButtons";
import { useTranslation } from "react-i18next";
import BasketBookContext from "../BasketBookContext/BasketBookContext";

export type Book = {
    title: string;
    id: number;
    isbn: string;
    pageCount: number;
    authors: string[];
    availableCopies: number;
};

export const EditBooks = () => {
    const [error, setError] = useState("");
    const { t, i18n } = useTranslation();
    const { handleEdit, handleSubmit, books, setSelectedBook, selectedBook } = useContext(BasketBookContext);

    useEffect(() => {
        if (books.length > 0) {
            setSelectedBook(books[0]);
        }
    }, [books, setSelectedBook]);

    return (
        <>
            <div className="hamburger-menu-container">
                <HamburgerMenu />
                <div className="translate-button"> 
                    <TranslateButtons />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="form">
                {selectedBook ? (
                    <div className="inputs">
                        <label htmlFor="input-title">
                            <strong>{t(`title`)}</strong>
                            <input
                                className="input-title"
                                value={selectedBook.title}
                                name="title"
                                onChange={handleEdit}
                            />
                        </label>
                        <label htmlFor="input-authors">
                            <strong>{t(`authors`)}:</strong>
                            <input
                                className="input-authors"
                                type="text"
                                value={selectedBook.authors ? selectedBook.authors.join(", ") : ""}
                                name="authors"
                                onChange={handleEdit}
                            />
                        </label>
                        <label htmlFor="input-pageCount">
                            <strong>{t(`pages`)}</strong>
                            <input
                                className="input-pageCount"
                                type="text"
                                value={selectedBook.pageCount}
                                name="pageCount"
                                onChange={handleEdit}
                            />
                        </label>
                        <label htmlFor="input-isbn">
                            <strong>ISBN:</strong>
                            <input
                                className="input-isbn"
                                type="text"
                                value={selectedBook.isbn}
                                name="isbn"
                                onChange={handleEdit}
                            />
                        </label>
                        <label htmlFor="input-id">
                            <strong>ID:</strong>
                            <input
                                className="input-id"
                                type="text"
                                value={selectedBook.id}
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
            {selectedBook && (
                <div className="updated-details">
                    <h2>{t(`updatedBookDetails`)}</h2>
                    <p><strong>{t(`title`)}</strong> {selectedBook.title}</p>
                    <p><strong>{t(`authors`)}:</strong> {selectedBook.authors ? selectedBook.authors.join(", ") : "N/A"}</p>
                    <p><strong>{t(`pages`)}</strong> {selectedBook.pageCount}</p>
                    <p><strong>ISBN:</strong> {selectedBook.isbn}</p>
                    <p><strong>ID:</strong> {selectedBook.id}</p>
                </div>
            )}
        </>
    );
};

export default EditBooks;
