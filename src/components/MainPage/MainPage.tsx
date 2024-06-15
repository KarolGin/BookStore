import { useState } from "react";
import { BookList } from "../../components/BookList/BookList";
import SearchInput from "../../pages/SearchInput/searchInput";
import { Background } from "../Nav/Background/Background";
import { MainNav } from "../Nav/MainNav/MainNav";
export const MainPage = () => {

  const [search, setSearch] = useState("");

  return (
    <div>
      <Background />
      <MainNav />
      <SearchInput query={search} setQuery={setSearch}/>
      <BookList query={search}/>
    </div>
  );
};
