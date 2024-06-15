import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BasketBookContextProvider } from './pages/BasketBookContext/BasketBookContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketBookContextProvider>
        <App />
      </BasketBookContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

