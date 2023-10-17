<script lang="ts">
import AppHeaderLayout from "@/layouts/app-header/AppHeaderLayout.vue";
import ControlMenu from "@/components/ControlMenu.vue";
import { Menu } from "@/types/menu.ts";
import { defaultMenu } from "@/constants/menu.ts";

export default {
  name: "AppHeader",
  components: {
    AppHeaderLayout,
    ControlMenu,
  },
  props: {
    currentLogo: {
      type: String,
      default: "",
    },
    logoRouteUrl: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isOpenDropdown: {
      type: Boolean,
      default: false,
    },
    menus: { type: Array<Menu>, default: defaultMenu },
  },
};
</script>

<template>
  <template>
    <app-header-layout>
      <template v-slot:logo>
        <a
          :href="logoRouteUrl"
          class="navbar-logo"
          v-if="currentLogo && !isLoading"
        >
          <img :src="currentLogo" class="navbar-logo__img" alt="Brand Logo" />
        </a>

        <a class="navbar-logo" v-else>
          <img src="#" class="navbar-logo__img" alt="default-logo"></img>
        </a>
      </template>

      <slot name="menus" />

      <template v-slot:controls>
        <control-menu v-bind:menus="menus" >

          <template v-slot:global-search>
            <div></div>
          </template>

        </control-menu>
      </template>

      <slot name="dropdown" />
    </app-header-layout>
  </template>
</template>
