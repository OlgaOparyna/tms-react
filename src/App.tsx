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
import SignIn from "./pages/SignIn";
import Success from "./pages/Success";

const App = () => {
  const [theme, setTheme] = useState(Theme.Ligth);
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (<div className={styles.container}>
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <ThemeSwitcher/>
      <Success/>
      <SignIn/>
      {/*<SelectedPost />*/}
      {/*<Home />*/}
      {/*<BurgerButton />*/}
    </ThemeProvider>
    </div>
  );
};

export default App;
