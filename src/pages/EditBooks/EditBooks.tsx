import { t } from "i18next";
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

    );
};

export default EditBooks;
