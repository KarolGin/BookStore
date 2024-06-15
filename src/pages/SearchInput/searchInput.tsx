import { Dispatch, SetStateAction, useContext } from "react";
import "./searchInput.scss";
import { t } from "i18next";
import { SearchContext } from "../../hooks/searchContext/searchContext";

export type SearchTag = {
  title: string;
  authors: string[];
};

type Props = {
  query: string,
  setQuery: Dispatch<SetStateAction<string>>
}

export const SearchInput = () => {

  const {query, setQuery} = useContext(SearchContext);

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