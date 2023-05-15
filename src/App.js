import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
const App = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h1>{t("greeting")}</h1>

      <select onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="de">German</option>
      </select>
    </div>
  );
};

export default App;
