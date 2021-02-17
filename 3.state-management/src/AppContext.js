import React, { createContext, useState, useContext } from "react";

function AppContext() {
  const LangContext = createContext();
  const ThemeContext = createContext();

  const LangProvider = (props) => {
    const [lang, setLang] = useState("id");
    const handleLang = (e) => setLang(e.target.value);
    const langState = { lang, handleLang };
    return (
      <LangContext.Provider value={langState}>
        {props.children}
      </LangContext.Provider>
    );
  };

  const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");
    const handleTheme = (e) => setTheme(e.target.value);
    const themeState = { theme, handleTheme };
    return (
      <ThemeContext.Provider value={themeState}>
        {props.children}
      </ThemeContext.Provider>
    );
  };

  return {
    LangContext,
    ThemeContext,
    ThemeProvider,
    LangProvider,
  };
}

export default AppContext();
