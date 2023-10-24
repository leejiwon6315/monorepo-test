export interface MenuType {
  id: number;
  menuName: string;
  type: string;
  link: string;
  visible: boolean;
}

export interface ControlMenuType {
  id: string | number;
  title: string;
  link: string;
  className?: string[];
  active?: boolean;
  isValid?: boolean;
  iconPath: string;
  isNew?: boolean;
}

export interface GlobalSearchInputType {
  placeholder?: string;
  redirectUrl: string;
  onSearch: () => void;
  searchIconPath?: string;
}

export interface MenuPropsType {
  currentId: number;
  onClickPrevent?: (e: Event, menu: MenuType) => void;
}
