import React from 'react';
import './Background.scss'; // Importowanie pliku SCSS
import logo from './logo.png'; // Tell webpack this JS file uses this image
import { TranslateButtons } from '../../TranslateButtons/TranslateButtons';

export const Background: React.FC = () => {
  return (
    <div>
    <div className='button-lang'>
    <TranslateButtons />
    </div>
    <div className="background"> {/* Przypisanie klasy */}
      <img src={logo} alt="Logo" className="logo" /> {/* Dodanie obrazka logo */}
    </div>
    </div>
  );
};

