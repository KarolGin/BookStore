import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Background } from './components/Nav/Background/Background';
import AddProduct from './pages/AddProduct/AddProduct';

function App() {
  return (
    <div >
      <h1>Hello World</h1>
      <Routes>
    <Route path="/" element={<Background />} />
    <Route path="/add" element={<AddProduct />} />

      
      </Routes>

    </div>
  );
}

export default App;
