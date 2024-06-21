import { ChangeEvent, createContext, useEffect, useState } from "react";
import { Book } from "../EditBooks/EditBooks";

type BookContextType = {
    books: Book[];
    selectedBook: Book | null;
    setSelectedBook: (book: Book | null) => void;
    bookCopies: { [key: number]: number };
    cart: Book[];
    addToCart: (book: Book) => void;
    sellBook: (bookId: number) => void;
    handleEdit: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    fetchBooks: () => Promise<void>;
};

export const BasketBookContext = createContext<BookContextType>(
    {} as BookContextType
);

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const BasketBookContextProvider = ({ children }: Props) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [bookCopies, setBookCopies] = useState<{ [key: number]: number }>({});
    const [cart, setCart] = useState<Book[]>([]);

    const fetchBooks = async () => {
        try {
            const res = await fetch(`https://fakeapi.extendsclass.com/books`);
            const data: Book[] = await res.json();
            setBooks(data);

            const initialCopies: { [key: number]: number } = {};
            data.forEach(book => {
                initialCopies[book.id] = 5;
            });
            setBookCopies(initialCopies);
        } catch (error) {
            console.log(`Error fetching book details:`, error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const sellBook = (bookId: number) => {
        setBookCopies(prevCopies => ({
            ...prevCopies,
            [bookId]: prevCopies[bookId] > 0 ? prevCopies[bookId] - 1 : 0
        }));
    };

    const addToCart = (book: Book) => {
        setCart(prevCart => [...prevCart, book]);
    };

    const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSelectedBook(prevBook => {
            if (prevBook) {
                if (name === "authors") {
                    const updatedAuthors = value.split(",").map(author => author.trim());
                    return { ...prevBook, authors: updatedAuthors };
                }
                return { ...prevBook, [name]: value };
            }
            return prevBook;
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectedBook) {
            try {
                const response = await fetch(`https://fakeapi.extendsclass.com/books/${selectedBook.id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectedBook)
                });

                if (!response.ok) {
                    throw new Error("Failed to update book");
                }

                const updatedBook = await response.json();
                setBooks(prevBooks => prevBooks.map(book => book.id === updatedBook.id ? updatedBook : book));
                alert("Book was updated successfully");
                fetchBooks(); 
            } catch (error) {
                console.error("Error updating book:", error);
                alert("Failed to update book");
            }
        }
    };

    return (
        <BasketBookContext.Provider
            value={{
                books,
                selectedBook,
                setSelectedBook,
                bookCopies,
                cart,
                addToCart,
                sellBook,
                handleEdit,
                handleSubmit,
                fetchBooks
            }}
        >
            {children}
        </BasketBookContext.Provider>
    );
};

export default BasketBookContext;
