import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./searchInput.scss";
import { t } from "i18next";

export type SearchTag = {
  title: string;
  authors: string[];
};

type Props = {
  query: string,
  setQuery: Dispatch<SetStateAction<string>>
}

export const SearchInput = ({query, setQuery} : Props) => {
  return (
    <>
      <div className="search-container">
        <form className="search">
          <label htmlFor="search-input" className="search-label">
            <input
              value={query}
              type="text"
              placeholder={t("Search")}
              className="search-input"
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="search-icon">🔎</span>
          </label>
        </form>
      </div>
    </>
  );
};
export default SearchInput;