import { Dispatch, SetStateAction } from "react";
import "./BookSort.scss";

type props = {
  setSortBy: Dispatch<SetStateAction<string>>;
};
export const BookSort = ({ setSortBy }: props) => {
  return (
    <div className="sort-dropdown">
      Sortuj po
      <ul className="sort-select">
        <li onClick={() => setSortBy("author")} className="sort-item">
          <a>Autor</a>
          <img src="./arrow-down-a-z-svgrepo-com.svg" />
        </li>
        <li onClick={() => setSortBy("title")} className="sort-item">
          <a>Tytuł</a>
          <img src="./arrow-down-a-z-svgrepo-com.svg" />
        </li>
        <li onClick={() => setSortBy("ISBN")} className="sort-item">
          <a>ISBN</a>
          <img src="./arrow-down-short-wide-svgrepo-com.svg" />
        </li>
      </ul>
    </div>
  );
};
