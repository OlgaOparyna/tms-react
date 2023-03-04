import React, { useState } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import styles from "./SignIn.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import classNames from "classnames";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const { theme } = useThemeContext();
  const isDark = theme === Theme.Dark;
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: isDark,
      })}
    >
      <div
        className={classNames(styles.backHome, {
          [styles.darkBackHome]: isDark,
        })}
      >
        Back to home
      </div>
      <Title title={"Sign In"} />
      <div className={styles.wrapper}>
        <div
          className={classNames(styles.inputContainer, {
            [styles.darkInputContainer]: isDark,
          })}
        >
          <Input
            title={"Email"}
            value={email}
            onChange={onChangeEmail}
            placeholder={"Your email"}
          />
          <Input
            title={"Password"}
            value={password}
            onChange={onChangePassword}
            placeholder={"Your password"}
          />
          <div
            className={classNames(styles.forgotPassword, {
              [styles.darkForgotPassword]: isDark,
            })}
          >
            Forgot password?
          </div>
          <div className={styles.button}>
            <Button
              title={"Sign In"}
              onClick={() => {}}
              type={ButtonType.Primary}
            />
          </div>
          <div
            className={classNames(styles.singUp, {
              [styles.darkSingUp]: isDark,
            })}
          >
            Don’t have an account? <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
