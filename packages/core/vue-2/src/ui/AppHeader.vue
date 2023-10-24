<script src="Vue2Button.test.ts"></script>
<template>
  <app-header-layout>
    <template v-slot:logo-container>
      <slot name="logo" />
    </template>

    <template v-slot:menu>
      <global-menu
        :menus="menus"
        :currentId="menuOption.currentId"
        :onClickPrevent="menuOption.onClickPrevent"
      />
    </template>

    <template v-slot:controls>
      <control-menu :menus="controlMenus">
        <template v-slot:global-search>
          <global-search
            :placeholder="searchOption.placeholder"
            :redirectURL="searchOption.redirectURL"
            :onSearch="searchOption.onSearch"
            :searchIconPath="searchOption.searchIconPath"
          />
        </template>
        <template v-slot:gnb-dropdown>
          <slot name="gnb-dropdown" />
        </template>
        <template v-slot:profile-dropdown>
          <slot name="profile-dropdown" />
        </template>
      </control-menu>
    </template>

    <slot name="dropdown" />
  </app-header-layout>
</template>

<script lang="ts">
import AppHeaderLayout from "@/layouts/app-header/AppHeaderLayout.vue";
import ControlMenu from "@/components/ControlMenu.vue";
import GlobalSearch from "@/components/GlobalSearch.vue";
import GlobalMenu from "@/components/GlobalMenu.vue";
import {
  ControlMenuType,
  GlobalSearchInputType,
  MenuPropsType,
  MenuType,
} from "@/types/menu.ts";
import {
  defaultControlMenu,
  defaultGlobalSearchInput,
  defaultMenu,
} from "@/constants/menu.ts";

export default {
  name: "AppHeader",
  components: {
    AppHeaderLayout,
    ControlMenu,
    GlobalMenu,
    GlobalSearch,
  },
  props: {
    isOpenDropdown: {
      type: Boolean,
      default: false,
    },
    menus: {
      type: Array<MenuType>,
      default: defaultMenu,
    },
    menuOption: {
      type: Object<MenuPropsType>(),
    },
    currentMenuId: {
      type: Number,
    },
    onClickMenuPrevent: {
      type: Function,
      default: null,
    },
    controlMenus: {
      type: Array<ControlMenuType>,
      default: defaultControlMenu,
    },
    searchOption: {
      type: Object<GlobalSearchInputType>(),
      default: defaultGlobalSearchInput,
    },
  },
};
</script>
