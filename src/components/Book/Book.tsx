import { useState } from "react";
import "./Book.scss";
import { BookType } from "../BookList/BookList";

export const Book = ({id, title, isbn, authors}: BookType) => {
  return (
    <div className="book">
      <img className="image" src="./book-cover-placeholder.png" alt={title}></img>
      <div className="title">{title}</div>
      {authors &&
        authors.map((author) => <div className="author">{author}</div>)}
      <div className="ISBN">IBSN: {isbn}</div>
    </div>
  );
};
