import React, { useState } from "react";
import styles from "./Burger.module.scss";
import { CloseIcon, OpenedMenu } from "../../assets/icons";
import Button from "../Button";
import { ButtonType } from "../Button/Button";

enum BurgerButtonState {
  Open,
  Close,
}
const BurgerButton = () => {
  const [activeBurgerButton, setActiveBurgerButton] = useState(
    BurgerButtonState.Open
  );
  const onBurgerClick = () => {
    return activeBurgerButton === BurgerButtonState.Open
      ? setActiveBurgerButton(BurgerButtonState.Close)
      : setActiveBurgerButton(BurgerButtonState.Open);
  };
  return (
    <Button
      title={
        activeBurgerButton === BurgerButtonState.Open ? (
          <OpenedMenu />
        ) : (
          <CloseIcon />
        )
      }
      onClick={onBurgerClick}
      type={ButtonType.Primary}
      className={styles.burgerButton}
    />
  );
};
export default BurgerButton;
