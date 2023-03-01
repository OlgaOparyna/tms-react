import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Tabs.module.scss";
import { TabsNames, TabsProps } from "./types";

const Tabs: FC<TabsProps> = ({ tabsListArray, activeTab, onClick }) => {
  const onTabClick = (key: TabsNames)=>()=>onClick(key);
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
