import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/useLocalStorage";
import i18n from "../../i18";
export const TranslateButtons = () => {
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
        <div>
            <button onClick={handleLenguageChange}>
                {t('change to')} {language === 'en' ? t('polish') : t('english')}
            </button>
            <button className='reload' onClick={() => window.location.reload()}>
                {t('refresh page')}
            </button>
        </div>
    );
};
