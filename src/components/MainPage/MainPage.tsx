import { BookList } from "../../components/BookList/BookList";
import { LinkForAddProduct } from "../LinksForPages/AddProductButton";
import SearchInput from "../../pages/SearchInput/searchInput";
export const MainPage = () => {
  return (
    <div>
      <SearchInput />
      <LinkForAddProduct />
      <BookList />
    </div>
  );
};