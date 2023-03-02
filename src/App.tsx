import React, { useState } from "react";
import "./App.scss";

import BurgerButton from "./components/Burger";
import styles from "./App.module.scss";
import Input from "./components/Input";
import Home from "./pages/Home";
import SelectedPost from "./pages/SelectedPost";
import ThemeProvider from "./context/Theme/Provider";
import { Theme } from "./context/Theme/Context";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  // const [text, setText] = useState("");
  // const onChange = (value: string) => {
  // setText(value)}
  const [theme, setTheme] = useState(Theme.Ligth);
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <ThemeSwitcher/>
      <SelectedPost />
      <Home />
      {/*<BurgerButton />*/}
      {/*<Input value={text} onChange={onChange} title="Title" placeholder="Placeholder"/>*/}
      {/*<Input value={text} onChange={onChange} title="Title" placeholder="Placeholder" disabled/>*/}
      {/*<Input value={text} onChange={onChange} title="Title" placeholder="Placeholder" errorText = {"Error text"} />*/}
    </ThemeProvider>
  );
};

export default App;
