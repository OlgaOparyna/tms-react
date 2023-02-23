import React from "react";
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

const MOCK_CARD = {
  id: 0,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMma1RsDUuSNsB1CLxhrSbNJH9OApmgGQndQ&usqp=CAU",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "22-02-2023",
  lesson_num: 9,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  description: "description of the post",
  author: 2,
};
const App = () => {
  return (
    <div className={styles.container}>
      <Button title={"Primary"} onClick={() => {}} type={ButtonType.Primary} />
      <Button
        disabled
        title={"Secondary"}
        onClick={() => {}}
        type={ButtonType.Secondary}
      />
      <Button title={"Error"} onClick={() => {}} type={ButtonType.Error} />
      <User userName={"Artem Malkin"} />
      <Title blog={"Blog"} />
      <Tabs />
      <BurgerButton />
      <Card card={MOCK_CARD} size={CardSize.Large} />
      <Card card={MOCK_CARD} size={CardSize.Medium} />
      <Card card={MOCK_CARD} size={CardSize.Small} />
      <Input title={"Title"} placeholder={"Placeholder"} />
      <Input title={"Title"} placeholder={"Text"} disabled />
      <Input title={"Title"} placeholder={"Text"} />
       </div>
  );
};

export default App;
