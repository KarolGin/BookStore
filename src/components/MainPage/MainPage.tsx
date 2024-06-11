import { BookList } from "../../components/BookList/BookList";
import { LinkForAddProduct } from "../LinksForPages/AddProductButton";
import SearchInput from "../../pages/SearchInput/searchInput";
import { Background } from "../Nav/Background/Background";
export const MainPage = () => {
  return (
    <div>
      <Background/>
      <SearchInput />
      <LinkForAddProduct />
      <BookList />
    </div>
  );
};