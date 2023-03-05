import React, { useMemo, useState } from "react";
import styles from "./Header.module.scss";
import User from "../../../components/User";
import Button from "../../../components/Button";
import { CloseIcon, OpenedMenu } from "../../../assets/icons";
import { ButtonType } from "../../../components/Button/Button";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RoutesList } from "../../Router";
import classNames from "classnames";

const Header = () => {
  const [isOpened, setOpened] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const onBurgerClick = () => setOpened(!isOpened);
  const onAuthButtonClick = () => {
    navigate(RoutesList.SignIn);
  };
  const navButtonsList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      {
        title: "Add Post",
        key: RoutesList.AddPost,
      },
    ],
    []
  );
  return (
    <>
      <div className={styles.container}>
        <Button
          title={isOpened ? <CloseIcon /> : <OpenedMenu />}
          onClick={onBurgerClick}
          type={ButtonType.Primary}
          className={styles.burgerButton}
        />
        <User userName={"Artem Malkin"} />
      </div>
      {isOpened && (
        <div className={styles.menuContainer}>
          <div className={styles.actionsContainer}>
            <User userName={'Artem Malkin'}/>
            {navButtonsList.map(({ key, title }) => {
              return (
                <NavLink
                  to={key}
                  key={key}
                  className={classNames(styles.navButton, {
                    [styles.activeNavButton]: location.pathname === key,
                  })}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
          <div>
            <ThemeSwitcher />
            <Button
              title={"Sign In"}
              onClick={onAuthButtonClick}
              type={ButtonType.Secondary}
              className={styles.authButton}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
