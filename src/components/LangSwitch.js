import React from 'react';
import { useTranslation } from 'react-i18next';
const languages = [{ key: 'en', label: 'EN' }, { key: 'hy', label: 'ARM' }, { key: 'ru', label: 'RU' }];

const LangSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <ul className="lang-switch">
      {languages.map(({ key, label }) => (
        <li key={key}>
          <button className={`unstyled ${i18n.language === key ? 'active' : ''}`} onClick={() => changeLanguage(key)}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LangSwitch;
