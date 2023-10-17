<script lang="ts">
import { Menu } from "@/types/menu.ts";
import { defaultMenu } from "@/constants/menu.ts";

export default {
  name: "ControlMenu",
  props: {
    menus: {
      type: Array<Menu>,
      default: defaultMenu,
    },
  },
};
</script>

<template>
  <div class="header-controls">
    <div class="header-controls__item">
      <slot name="global-search" />
    </div>

    <template>
      <div
        v-for="menu in menus"
        v-bind:key="menu.title"
        class="header-controls__item"
        :class="[...menu.className, { active: menu.active }]"
      >
        <slot name="extra-icon" />
        <a :href="menu.link" :title="menu.title" class="header-link">
          <base-svg class="icon" name="{{menu.icon}}" />
        </a>
      </div>
    </template>

    <div class="header-controls__item gnb dropdown">
      <slot name="gnb-dropdown" />
    </div>

    <div class="header-controls__item profile">
      <slot name="profile-dropdown" />
    </div>
  </div>
</template>
