import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../Book/Book";
import "./BookList.scss";
import { BookSort } from "../BookSort/BookSort";
import { SearchContext } from "../../hooks/searchContext/searchContext";
import { t } from "i18next";

export type BookType = {
  id: string;
  title: string;
  isbn: number;
  authors: string[];
};

export const BookList: React.FC = () => {
  const { query } = useContext(SearchContext);
  const [books, setBooks] = useState<BookType[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>([]);
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("");

  const fetchBooks = async () => {
    try {
      const res = await fetch("https://fakeapi.extendsclass.com/books", {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      if (data) {
        setBooks(data);
        setFilteredBooks(data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (query === "") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter(
          (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.authors.join(", ").toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);

  const handleShowDetails = (bookId: string) => {
    navigate(`/bookdetails/${bookId}`);
  };

  const compareBasedOnSortBy = (a: BookType, b: BookType) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title) ?? 0;
    } else if (sortBy === "author") {
      return a.authors[0].localeCompare(b.authors[0]) ?? 0;
    } else if (sortBy === "ISBN") {
      return a.isbn < b.isbn ? -1 : 1;
    } else {
      return a.id < b.id ? -1 : 1;
    }
  };

  return (
    <>
      <div className="counter">
        Liczba dostępnych pozycji: {filteredBooks.length}
      </div>
      <BookSort setSortBy={setSortBy} />
      <div className="book-container">
        {filteredBooks.length > 0 &&
          filteredBooks
            .sort(compareBasedOnSortBy)
            .map((item) => (
              <Book
                key={item.id}
                {...item}
                onShowDetails={() => handleShowDetails(item.id)}
              />
            ))}
      </div>
    </>
  );
};

export default BookList;
