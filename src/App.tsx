import React from "react";
import "./App.scss";

import Button from "./components/Button";
import User from "./components/User";
import Title from "./components/Title";
import { ButtonType } from "./components/Button/Button";

const App = () => {
  return (
    <div className="App">
        <Button title={'Primary'} onClick={()=>{}} type={ButtonType.Primary} />
        <Button disabled title={'Secondary'} onClick={()=>{}}type={ButtonType.Secondary} />
        <Button title={'Error'} onClick={()=>{}} type={ButtonType.Error} />
        <User userName={"Artem Malkin"}/>
        <Title blog={'Blog'}/>
    </div>
  );
};

export default App;