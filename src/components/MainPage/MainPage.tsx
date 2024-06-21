import { BookList } from "../../components/BookList/BookList";
import SearchInput from "../../pages/SearchInput/searchInput";
import { Background } from "../Nav/Background/Background";
import { MainNav } from "../Nav/MainNav/MainNav";
import { SearchProvider } from "../../hooks/searchContext/searchContext";
import { BasketBookContextProvider } from "../../pages/BasketBookContext/BasketBookContext";

export const MainPage = () => {
  return (
    <div>
      <BasketBookContextProvider>
      <SearchProvider>
        <Background />
        <MainNav />
        <SearchInput />
        <BookList />
      </SearchProvider>
      </BasketBookContextProvider>
    </div>
  );
};
