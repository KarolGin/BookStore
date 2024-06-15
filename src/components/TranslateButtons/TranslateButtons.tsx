import { useTranslation } from "react-i18next";
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
        <div>
            <button onClick={handleLenguageChange}>
                {t('change to')} {i18n.language === 'en' ? t('polish') : t('english')}
            </button>
            <button className='reload' onClick={() => window.location.reload()}>
                {t('refresh page')}
            </button>
        </div>
    );
};
