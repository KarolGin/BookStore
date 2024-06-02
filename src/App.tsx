import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Background } from './components/Nav/Background/Background';
import AddProduct from './pages/AddProduct/AddProduct';
import EditBooks from './pages/EditBooks/EditBooks';
import { SearchInput } from './pages/SearchInput/searchInput';
import ChangeLanguage from './pages/changeLanguage/changeLanguage';


function App() {
  return (
    <div >
      <h1>Hello World</h1>
      <Routes>
    <Route path="/" element={<Background />} />
    <Route path="/add" element={<AddProduct />} />
    <Route path ="edit" element={<EditBooks />} />
    <Route path='change' element={<ChangeLanguage />} />
      </Routes>

    </div>
  );
}

export default App;
