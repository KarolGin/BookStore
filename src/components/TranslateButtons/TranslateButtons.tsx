import { useTranslation } from "react-i18next";
import "./TranslateButtons.scss"
export const TranslateButtons = () => {
    const { t, i18n } = useTranslation();
    const handleLenguageChange = () => {
        console.log(i18n);
        if (i18n.language === 'en') {
            i18n.changeLanguage('pl');
        } else if (i18n.language === 'pl') {
            i18n.changeLanguage('en');
        }
    };
    return (
        <div className="language-conteiner">
            <button className="language" onClick={handleLenguageChange}>
                {i18n.language === 'en' ? <img src="/images/favicon-poland.png" alt="poland-flag" className="poland"/> : <img src="/images/favicon-britan.png" alt="britan-flag" className="britan" />} 
            </button>
        </div>
    );
};
