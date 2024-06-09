import { BookList } from "../../components/BookList/BookList";
import SearchInput from "../../pages/SearchInput/searchInput";
import { MainNav } from "../Nav/MainNav/MainNav";
export const MainPage = () => {
  return (
    <div>
      <MainNav />
      <SearchInput />
      <BookList />
    </div>
  );
};