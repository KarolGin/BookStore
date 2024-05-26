import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Background } from './components/Nav/Background/Background';
import AddProduct from './pages/AddProduct/AddProduct';

function App() {
  return (
    <div >
      <Routes>
    <Route path="/" element={<Background />} />
    <Route path="/add" element={<AddProduct />} />

      
      </Routes>

    </div>
  );
}

export default App;
