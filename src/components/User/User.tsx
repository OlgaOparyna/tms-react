import React, { FC } from "react";

import styles from "./User.module.scss";


type UserProps = {
  userName: string;
};
const User: FC<UserProps> = ({ userName }) => {
  const userLetters = userName.split(' ').map(word => word[0].toUpperCase()).join('');
  return (
    <div className={styles.userStyles}>
      <div className={styles.userLetters}>
        { userLetters }
      </div>
      <div className={styles.userName}>{ userName }</div>
    </div>
  );
};
export default User;