import { ControlMenuType, MenuType } from "@/types/menu.ts";

export const defaultMenu: Array<MenuType> = [];

export const defaultControlMenu: Array<ControlMenuType> = [];

export const defaultGlobalSearchInput = {
  placeholder: "",
  redirectUrl: "",
  onSearch: () => {},
};
