import React from "react";
import "./Book.scss";
import { BookType } from "../BookList/BookList";

interface BookProps extends BookType {
  onShowDetails: (id: string) => void;
}

export const Book: React.FC<BookProps> = ({
  id,
  title,
  authors,
  onShowDetails,
}) => {
  const handleShowDetails = () => {
    onShowDetails(id);
  };

  return (
    <div className="book">
      <img
        className="image"
        src="./book-cover-placeholder.png"
        alt={title}
      ></img>
      <h3>{title}</h3>
      <p>{authors.join(", ")}</p>
      <button onClick={handleShowDetails}>Show Details</button>
    </div>
  );
};
