import React, { FC, ReactNode } from "react";

import styles from "./Title.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import classNames from "classnames";


type TitleProps = {
  title: string;
};
const Title: FC<TitleProps> = ({ title }) => {
  const { theme } = useThemeContext();
  return (
    <div className={classNames(styles.title, { [styles.darkTitle]: theme === Theme.Dark })}>{ title }</div>
  );
};
export default Title;