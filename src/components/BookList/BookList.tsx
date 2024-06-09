// src/components/BookList/BookList.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
      </div>
    </>
  );
};
