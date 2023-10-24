<template>
  <div class="header-channel">
    <template v-for="menu in menus">
      <a
        :key="menu.id"
        :to="menu.link"
        :class="[
          'header-channel__title',
          menu.id === currentId ? 'active' : '',
        ]"
        @click.stop.prevent="
          menu.id !== currentId && onClickPrevent($event, menu)
        "
      >
        {{ menu.menuName }}
      </a>
    </template>
  </div>
</template>

<script lang="ts">
import { MenuType } from "@/types/menu.ts";
import { defaultMenu } from "@/constants/menu.ts";
import { PropType } from "vue";

export default {
  name: "GlobalMenu",
  props: {
    menus: {
      type: Array as PropType<MenuType[]>,
      default: () => defaultMenu,
    },
    currentId: {
      type: Number,
    },
    onClickPrevent: {
      type: Function as PropType<(e: Event, menu: MenuType) => void>,
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
