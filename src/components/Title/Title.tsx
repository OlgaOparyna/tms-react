import React, { FC, ReactNode } from "react";

import styles from "./Title.module.scss";


type TitleProps = {
  blog: string;
};
const Title: FC<TitleProps> = ({ blog }) => {
  return (
    <h1 className={styles.title}>{ blog }</h1>
  );
};
export default Title;