import React from 'react';
import './Background.scss'; // Importowanie pliku SCSS
import logo from './logo.png'; // Tell webpack this JS file uses this image
export const Background: React.FC = () => {
  return (
    <div className="background"> {/* Przypisanie klasy */}
      <img src={logo} alt="Logo" className="logo" /> {/* Dodanie obrazka logo */}
    </div>

  );
};

