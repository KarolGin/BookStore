import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Background } from './components/Nav/Background/Background';
import AddProduct from './pages/AddProduct/AddProduct';
import EditBooks from './pages/EditBooks/EditBooks';
import { SearchInput } from './pages/SearchInput/searchInput';
import { useTranslation } from 'react-i18next';
import useLocalStorage from './hooks/useLocalStorage';
import i18n from './i18';
import { MainPage } from './components/MainPage/MainPage';



function App() {
  
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'pl');

  const handleLenguageChange = () => {
      if (language === 'en') {
          i18n.changeLanguage('pl');
          setLanguage('pl');
      } else if (language === 'pl') {
          i18n.changeLanguage('en');
          setLanguage('en');
      }
  };
  return (
    <div className='App'>
        <h2>{t('Hello World')}</h2>
            <br />
            <button onClick={handleLenguageChange}>
                {t('change to')}{' '}
                {language === 'en' ? t('polish') : t('english')}
            </button>
            <button className='reload' onClick={() => window.location.reload()}>
                {t('refresh page')}
            </button>
      <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/add" element={<AddProduct />} />
    <Route path ="edit" element={<EditBooks />} />
    <Route path="search" element={<SearchInput /> } />
      </Routes>
    </div>
  );
}

export default App;
