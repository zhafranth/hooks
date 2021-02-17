import React, { createContext, useState, useContext } from "react";
import AppContext from "./AppContext";
import "./App.css";
import Layout from "./components/layout";

// ===>Single Context
/* const { Provider, Consumer } = createContext();

function App() {
  const [lang, setLang] = useState("id");
  const handleLang = (e) => setLang(e.target.value);
  const langState = { lang, handleLang };
  return (
    <Layout title="React Hooks #3 - State Management">
      <Provider value={langState}>
        <Header />
        <Content />
        <Footer />
      </Provider>
    </Layout>
  );
}

function Header() {
  return (
    <Consumer>
      {(props) => (
        <>
          <h2>-- Header --</h2>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>
              Language
              <select
                name="language"
                id="language"
                value={props.lang}
                onChange={props.handleLang}
              >
                <option value="id">Indonesia</option>
                <option value="en">Inggris</option>
              </select>
            </li>
          </ul>
        </>
      )}
    </Consumer>
  );
}

function Content() {
  return (
    <>
      <h2>-- Content --</h2>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Hello React Context
      </p>
    </>
  );
}

function Footer() {
  return (
    <Consumer>
      {(props) => (
        <>
          <h2>-- Footer --</h2>
          <p>Language : {props.lang}</p>
        </>
      )}
    </Consumer>
  );
}

export default App; */

// ===>Multiple Context
/*const langContext = createContext();
const { Provider: LangProvider, Consumer: LangConsumer } = langContext;

const themeContext = createContext();
const { Provider: ThemeProvider, Consumer: ThemeConsumer } = themeContext;

function App() {
  // Language Value
  const [lang, setLang] = useState("id");
  const handleLang = (e) => setLang(e.target.value);
  const langState = { lang, handleLang };

  // Theme Value
  const [theme, setTheme] = useState("light");
  const handleTheme = (e) => setTheme(e.target.value);
  const themeState = { theme, handleTheme };
  return (
    <Layout title="React Hooks #3 - State Management">
      <LangProvider value={langState}>
        <ThemeProvider value={themeState}>
          <Header />
          <Content />
          <Footer />
        </ThemeProvider>
      </LangProvider>
    </Layout>
  );
}

function Header() {
  const props = useContext(langContext);
  const propsTheme = useContext(themeContext);
  return (
    <>
      <h2>-- Header --</h2>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>
          Language
          <select
            name="language"
            id="language"
            value={props.lang}
            onChange={props.handleLang}
          >
            <option value="id">Indonesia</option>
            <option value="en">Inggris</option>
          </select>
        </li>
        <li>
          Language
          <select
            name="language"
            id="language"
            value={propsTheme.theme}
            onChange={propsTheme.handleTheme}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </li>
      </ul>
    </>
  );
}

function Content() {
  return (
    <>
      <h2>-- Content --</h2>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Hello React Context
      </p>
    </>
  );
}

function Footer() {
  const props = useContext(langContext);
  const themeProps = useContext(themeContext);
  return (
    <>
      <h2>-- Footer --</h2>
      <p>Language : {props.lang}</p>
      <p>Language : {themeProps.theme}</p>
    </>
  );
}

export default App;*/

const { LangContext, LangProvider, ThemeContext, ThemeProvider } = AppContext;

function App() {
  return (
    <Layout title="React Hooks #3 - State Management">
      <LangProvider>
        <ThemeProvider>
          <Header />
          <Content />
          <Footer />
        </ThemeProvider>
      </LangProvider>
    </Layout>
  );
}

function Header() {
  const props = useContext(LangContext);
  const propsTheme = useContext(ThemeContext);
  return (
    <>
      <h2>-- Header --</h2>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>
          Language
          <select
            name="language"
            id="language"
            value={props.lang}
            onChange={props.handleLang}
          >
            <option value="id">Indonesia</option>
            <option value="en">Inggris</option>
          </select>
        </li>
        <li>
          Language
          <select
            name="language"
            id="language"
            value={propsTheme.theme}
            onChange={propsTheme.handleTheme}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </li>
      </ul>
    </>
  );
}

function Content() {
  return (
    <>
      <h2>-- Content --</h2>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Hello React Context
      </p>
    </>
  );
}

function Footer() {
  const props = useContext(LangContext);
  const themeProps = useContext(ThemeContext);
  return (
    <>
      <h2>-- Footer --</h2>
      <p>Language : {props.lang}</p>
      <p>Language : {themeProps.theme}</p>
    </>
  );
}

export default App;
