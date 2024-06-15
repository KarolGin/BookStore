import { useEffect, useState } from "react";
import "./searchInput.scss";
import { t } from "i18next";
import { BookList } from "../../components/BookList/BookList";


export type SearchTag = {
  title: string;
  authors: string[];
};

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<SearchTag[]>([]);
  const [error, setError] = useState("");
  const [resultList, setResultList] = useState<SearchTag[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await fetch(`https://fakeapi.extendsclass.com/books`, {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const dataBook = await res.json();
      console.log("Fetched books data:", dataBook);
      if (Array.isArray(dataBook)) {
        setBooks(dataBook);
        console.log("Books state updated:", dataBook);
      } else {
        console.error("Books data is not an array:", dataBook);
        setError("Invalid data format from API");
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
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.authors.join(", ").toLowerCase().includes(query.toLowerCase())
      );
      console.log("Filtered results:", results);
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
      <div className="search-container">
        <form className="search">
          <label htmlFor="search-input" className="search-label">
            <input
              value={query}
              type="text"
              placeholder={t("Search")}
              className="search-input"
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="search-icon">🔎</span>
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
      </div>
      <BookList />
    </>
  );
};

export default SearchInput;
