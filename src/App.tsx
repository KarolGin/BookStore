
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct/AddProduct";
import EditBooks from "./pages/EditBooks/EditBooks";
import { SearchInput } from "./pages/SearchInput/searchInput";
import { BookList } from "./components/BookList/BookList";
import { BookDetails } from "./components/BookDetails/BookDetails";
import { MainPage } from "./components/MainPage/MainPage";
import { CartBook } from "./pages/CartButton/CartButton";
import { SellBookComponent } from "./pages/SellBookComponent/sellBookComponent";


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="edit" element={<EditBooks />} />
        <Route path="search" element={<SearchInput />} />
        <Route path="cart" element={<CartBook />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="sell" element={<SellBookComponent />} />
      </Routes>
    </div>
  );
}

export default App;
