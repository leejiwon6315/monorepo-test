<template>
  <app-header-layout>
    <template v-slot:logo-container>
      <slot name="logo" />
    </template>

    <template v-slot:menu>
      <global-menu
        :menus="menus"
        :currentId="menuOption?.currentId"
        :onClickPrevent="menuOption?.onClickPrevent"
      />
    </template>

    <template v-slot:controls>
      <control-menu :menus="controlMenus">
        <template v-slot:global-search>
          <global-search
            :placeholder="searchOption.placeholder"
            :redirectURL="searchOption.redirectUrl"
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
import { PropType } from "vue";

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
      type: Array as PropType<MenuType[]>,
      default: () => defaultMenu,
    },
    menuOption: {
      type: Object as PropType<MenuPropsType>,
    },
    currentMenuId: {
      type: Number,
    },
    onClickPrevent: {
      type: Function as PropType<(e: Event, menu: MenuType) => void>,
      default: null,
    },
    controlMenus: {
      type: Array as PropType<ControlMenuType[]>,
      default: () => defaultControlMenu,
    },
    searchOption: {
      type: Object as PropType<GlobalSearchInputType>,
      default: () => defaultGlobalSearchInput,
    },
  },
};
</script>
