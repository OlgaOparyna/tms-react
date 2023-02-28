export enum TabsNames {
  ALL,
  FAVORITES,
  POPULAR,
}
export type TabsProps = {
tabsListArray: TabsType[];
activeTab: number;
onTabClick: (key: TabsNames)=> ()=> void;
}
export type TabsType = {
  title: string;
  disabled: boolean;
  key: TabsNames,
}