import React, { useState }  from "react";
import "./App.scss";

import Button from "./components/Button";
import User from "./components/User";
import Title from "./components/Title";
import { ButtonType } from "./components/Button/Button";
import Tabs from "./components/Tabs";
import BurgerButton from "./components/Burger";
import Card from "./components/Card";
import { CardSize } from "./components/Card/types";
import styles from "./App.module.scss";
import Input from "./components/Input";
import Home from "./pages/Home";


const App = () => {
  const [text, setText] = useState("");
  const onChange = (value: string) => {
    setText(value)}
  return (
    <div className={styles.container}>
      {/*<Button title={"Primary"} onClick={() => {}} type={ButtonType.Primary} />*/}
      {/*<Button*/}
      {/*  disabled*/}
      {/*  title={"Secondary"}*/}
      {/*  onClick={() => {}}*/}
      {/*  type={ButtonType.Secondary}*/}
      {/*/>*/}
      {/*<Button title={"Error"} onClick={() => {}} type={ButtonType.Error} />*/}
      {/*<User userName={"Artem Malkin"} />*/}
      <Home/>
      {/*<BurgerButton />*/}
      {/*<Card card={MOCK_CARD} size={CardSize.Large} />*/}
      {/*<Card card={MOCK_CARD} size={CardSize.Medium} />*/}
      {/*<Card card={MOCK_CARD} size={CardSize.Small} />*/}
      <Input value={text} onChange={onChange} title="Title" placeholder="Placeholder"/>
      <Input value={text} onChange={onChange} title="Title" placeholder="Placeholder" disabled/>
      <Input value={text} onChange={onChange} title="Title" placeholder="Placeholder" errorText = {"Error text"} />
       </div>
  );
};

export default App;