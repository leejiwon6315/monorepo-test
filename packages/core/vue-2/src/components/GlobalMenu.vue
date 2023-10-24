<template>
  <div class="header-channel">
    <template v-for="menu in menus">
      <a
        v-if="menu.id === currentId"
        :key="menu.id"
        :to="menu.link"
        class="header-channel__title active"
      >
        {{ menu.menuName }}
      </a>

      <a
        v-else
        :key="menu.id"
        :href="menu.link"
        class="header-channel__title"
        @click.stop.prevent="onClickPrevent($event, menu)"
        >{{ menu.menuName }}
      </a>
    </template>
  </div>
</template>

<script lang="ts">
import { MenuType } from "@/types/menu.ts";
import { defaultMenu } from "@/constants/menu.ts";

export default {
  name: "GlobalMenu",
  props: {
    menus: {
      type: Array<MenuType>,
      default: defaultMenu,
    },
    currentId: {
      type: Number,
    },
    onClickPrevent: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.header-channel {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 7px;
  word-break: keep-all;

  &__title {
    color: #000000;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 10px;
    margin: 0 7px;

    transition-property: all;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &.active,
    &:hover {
      background-color: #ebebeb;
    }
  }
}
</style>
