// src/components/Book/Book.tsx
import React from "react";
import { BookType } from "../BookList/BookList";
import "./Book.scss";

interface BookProps extends BookType {
  onShowDetails: () => void;
}

export const Book: React.FC<BookProps> = ({
  title,
  authors,
  onShowDetails,
}) => {
  return (
    <div className="book">
      <img
        className="image"
        src="./book-cover-placeholder.png"
        alt={title}
      ></img>
      <h3>{title}</h3>
      <p>{authors.join(", ")}</p>
      <button onClick={onShowDetails}>Show Details</button>
    </div>
  );
};
