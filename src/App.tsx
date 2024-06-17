import "./App.scss";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct/AddProduct";
import EditBooks from "./pages/EditBooks/EditBooks";
import { BookDetails } from "./components/BookDetails/BookDetails";
import { MainPage } from "./components/MainPage/MainPage";
import SellBookComponent from "./pages/SellBookComponent/sellBookComponent";
import { CartBook } from "./pages/CartButton/CartButton";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit" element={<EditBooks />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="sell" element={<SellBookComponent />} />
        <Route path="/cart" element={<CartBook />} />
      </Routes>
    </div>
  );
}

export default App;
