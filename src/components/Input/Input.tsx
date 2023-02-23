import React, { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";
import { ButtonType } from "../Button/Button";

type InputProps = {
  title: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
};
const Input: FC<InputProps> = ({ title, placeholder, disabled, className }) => {
  const [errorState, setErrorState] = useState(false);
  const onInputClick = ()=>{
    setErrorState (!errorState)
  }
  return (
    <div>
      <label className={styles.title}>{title}</label>
      <input
        type="text"
        className={classNames(styles.input, {
          [styles.disabledInput]: disabled === true,
          [styles.errorInput]: errorState,
        })}
        placeholder={placeholder}
        disabled={disabled}
        onChange={() => {}}
        onClick ={onInputClick}
      />
      {/*не понимаю, как включить состояние error*/}
    </div>
  );
};

export default Input;
