import { BookList } from "../../components/BookList/BookList";
import SearchInput from "../../pages/SearchInput/searchInput";
import { Background } from "../Nav/Background/Background";
import { MainNav } from "../Nav/MainNav/MainNav";
export const MainPage = () => {
  return (
    <div>
      <Background />
      <MainNav />
      <SearchInput />
      <BookList />
    </div>
  );
};
