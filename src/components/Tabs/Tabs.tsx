import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Tabs.module.scss";
import { TabsProps } from "./types";

const Tabs: FC<TabsProps> = ({ tabsListArray, activeTab, onTabClick }) => {

  return (
    <div className={styles.container}>
      {tabsListArray.map((tab) => {
        return (
          <div
            key={tab.key}
            className={classNames(styles.tab, {
              [styles.activeTab]: activeTab === tab.key,
              [styles.disabled]: tab.disabled,
            })}
            onClick ={tab.disabled ? undefined : onTabClick(tab.key)}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};
export default Tabs;
