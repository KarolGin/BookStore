import { useEffect, useState } from "react";
import { Book } from "../Book/Book";
import "./BookList.scss";

export type BookType = {
  id: number;
  title: string;
  isbn: number;
  authors: string[];
};

export const BookList = () => {
  const [books, setBooks] = useState<BookType[]>([]);
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

  return (
    <>
      <div className="counter">Liczba dostępnych pozycji:{books.length}</div>
      <div className="book-container">
        {books.map((item) => (
          <Book {...item}></Book>
        ))}
      </div>
    </>
  );
};
