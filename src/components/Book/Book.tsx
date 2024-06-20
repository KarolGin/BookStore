import React from "react";
import "./Book.scss";
import { BookType } from "../BookList/BookList";
import { useTranslation } from "react-i18next";
interface BookProps extends BookType {
  onShowDetails: () => void;
}
export const Book: React.FC<BookProps> = ({
  title,
  authors,
  onShowDetails,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="book">
      <img
        className="image"
        src="./book-cover-placeholder.png"
        alt={title}
      ></img>
      <h3>{title}</h3>
      <p>{authors.join(", ")}</p>
      <button onClick={onShowDetails}>{t(`showdetails`)}</button>
    </div>
  );
};
