import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Background } from './components/Nav/Background/Background';
import AddProduct from './pages/AddProduct/AddProduct';
import EditBooks from './pages/EditBooks/EditBooks';

function App() {
  return (
    <div >
      <h1>Hello World</h1>
      <Routes>
    <Route path="/" element={<Background />} />
    <Route path="/add" element={<AddProduct />} />
    <Route path ="edit" element={<EditBooks />} />
      
      </Routes>

    </div>
  );
}

export default App;
