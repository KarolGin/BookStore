import "./AddProduct.scss"
import React, { useState } from "react";
type Product = {
  price: number;
  title: string;
  subtitle: string;
};
export const AddProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    try {
      const res = await fetch("https://api.itbook.store/1.0/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          subtitle: subtitle,
          price: parseFloat(price)   // przemiana ceny na liczbe
        }), 
      })
      if (!res.ok) throw new Error("cannot add new product!");

      const newProduct = await res.json();
      alert(`pomyslnie utworzono produkt ${newProduct.title}`);
      console.log(newProduct);

      setProducts((prevProducts) => [...prevProducts, newProduct]);
      clearForm();
    } catch (e) {
      console.log(e);
    }
    
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProduct();
  };

  const clearForm = () => {
    setTitle('');
    setSubtitle('');
    setPrice('');
  };
  
  
  return (
    <>
    <div className="main-container">
    <h2 className="add-new-book-text" >Dodaj nową książke</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label><strong>Tytuł:</strong></label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label><strong>Podtytuł:</strong></label>
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label><strong>Cena:</strong></label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
  <span className="add-new-book-button">
  <button className="submit-button" type="submit">Dodaj Produkt</button>
  </span>
    </form>
    <div className="preview-new-book">
      <h2>Podgląd nowej książki</h2>
      <span>
        <strong>Tytuł:</strong> {title}
        <br />
        <strong>Podtytuł:</strong> {subtitle}
        <br />
        <strong>Cena:</strong> {price}
        <br />
        <strong>Data dodania:</strong> {new Date().toLocaleString()}
        
      </span>
    </div>
  </div>
  </>
  );
};  
export default AddProduct;