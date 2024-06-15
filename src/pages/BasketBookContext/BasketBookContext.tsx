
import { createContext, useEffect, useState } from "react";
import { Book } from "../EditBooks/EditBooks"
type BookContextType = {
    books: Book[];
    bookCopies: { [key: number]: number };
    cart: Book[];
    addToCart: (book: Book) => void;
    sellBook: (bookId: number) => void;
};
export const BasketBookContext = createContext<BookContextType>(
    {} as BookContextType
);

type Props = {
    children: JSX.Element | JSX.Element
}

export const BasketBookContextProvider = ({ children }: Props) => {
    const [books, setBooks] = useState<Book[]>([]);
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
    }

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

    return (
        <BasketBookContext.Provider
            value={{
                books,
                bookCopies,
                cart,
                addToCart,
                sellBook

            }}
        >
            {children}
        </BasketBookContext.Provider>
    )
}

export default BasketBookContext;