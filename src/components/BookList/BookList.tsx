// src/components/BookList/BookList.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../Book/Book";
import "./BookList.scss";
import { BookSort } from "../BookSort/BookSort";

export type BookType = {
  id: number;
  title: string;
  isbn: number;
  authors: string[];
};

export const BookList = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const navigate = useNavigate();

=======
<!--   const [sortBy, setSortBy] = useState(""); -->

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
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  const handleShowDetails = (bookId: number) => {
    navigate(`/bookdetails/${bookId}`);

//   const compareBasedOnSortBy = (a: BookType, b: BookType) => {
//     if (sortBy === "title") {
//       return a.title.localeCompare(b.title) ?? 0;
//     } else if (sortBy === "author") {
//       return a.authors[0].localeCompare(b.authors[0]) ?? 0;
//     } else if (sortBy === "ISBN") {
//       return a.isbn < b.isbn ? -1 : 1;
//     } else {
//       return a.id < b.id ? -1 : 1;
//     }

  };

  return (
    <>
      <div className="counter">Liczba dostępnych pozycji: {books.length}</div>
      <div className="book-container">
        {books.map((item) => (
          <Book
            key={item.id}
            {...item}
            onShowDetails={() => handleShowDetails(item.id)}
          />
        ))}

<!--       <div className="counter">Liczba dostępnych pozycji:{books.length}</div>
      <BookSort setSortBy={setSortBy} />
      <div className="book-container">
        {books.length &&
          books
            .sort(compareBasedOnSortBy)
            .map((item) => <Book {...item}></Book>)} -->

      </div>
    </>
  );
};
