import { BookList } from "../../components/BookList/BookList";
import SearchInput from "../../pages/SearchInput/searchInput";
import { Background } from "../Nav/Background/Background";
import { MainNav } from "../Nav/MainNav/MainNav";
import { SearchProvider } from "../../hooks/searchContext/searchContext";
export const MainPage = () => {
  return (
    <div>
      <SearchProvider>
        <Background />
        <MainNav />
        <SearchInput />
        <BookList />
      </SearchProvider>
    </div>
  );
};
