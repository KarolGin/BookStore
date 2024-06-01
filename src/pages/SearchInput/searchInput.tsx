import { useEffect, useState } from "react";
import "./searchInput.scss";

export type SearchTag = {
    title: string;
    subtitle: string;
};

export const SearchInput = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState<SearchTag[]>([]);
    const [error, setError] = useState("");
    const [resultList, setResultList] = useState<SearchTag[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const fetchBooks = async () => {
        try {
            const res = await fetch(`https://api.itbook.store/1.0/search/mongodb`, {
                method: "GET",
            });
            if (!res.ok) {
                throw new Error("Something went wrong");
            }
            const dataBook = await res.json();
            if (dataBook && dataBook.books) {
                setBooks(dataBook.books);
            }
        } catch (error) {
            setError("Error fetching book details");
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    useEffect(() => {
        if (query) {
            const results = books.filter(
                book =>
                    book.title.toLowerCase().includes(query.toLowerCase()) ||
                    book.subtitle.toLowerCase().includes(query.toLowerCase())
            );
            setResultList(results);
            setShowDropdown(true);
        } else {
            setResultList([]);
            setShowDropdown(false);
        }
    }, [query, books]);

    const handleSelect = (title: string) => {
        setQuery(title);
        setShowDropdown(false);
    };

    return (
        <>
            <form className="search">
                <label htmlFor="search-input">
                    <input
                        value={query}
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>
            </form>
            {error && <p>{error}</p>}
            {showDropdown && (
                <ul className="dropdown">
                    {resultList.map((book, index) => (
                        <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleSelect(book.title)}
                        >
                            {book.title}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SearchInput;
