import { useState } from "react";
import "./Book.scss";
import { BookType } from "../BookList/BookList";

export const Book = (props: BookType) => {
  const [bookImage, setBookImage] = useState("./book-cover-placeholder.png");

  return (
    <>
      <div className="book">
        <img className="image" src={bookImage} alt={props.title}></img>
        <div className="title">{props.title}</div>
        {props.authors &&
          props.authors.map((author) => <div className="author">{author}</div>)}
        <div className="ISBN">IBSN: {props.isbn}</div>
      </div>
    </>
  );
};
