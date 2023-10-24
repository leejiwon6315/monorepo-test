<template>
  <div class="header-controls">
    <div class="header-controls__item">
      <slot name="global-search" />
    </div>

    <template>
      <div
        v-for="menu in menus"
        v-bind:key="menu.id"
        class="header-controls__item"
        :class="
          menu.className
            ? [...menu.className, { active: menu.active }]
            : { active: menu.active }
        "
      >
        <div v-if="menu.isNew" class="new"></div>
        <a :href="menu.link" :title="menu.title" class="header-link">
          <base-svg class="icon" :name="`${menu.iconPath}`" />
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

<script lang="ts">
import { ControlMenuType } from "@/types/menu.ts";
import { defaultControlMenu } from "@/constants/menu.ts";
import BaseSvg from "./BaseSvg.vue";
import { PropType } from "vue";

export default {
  name: "ControlMenu",
  props: {
    menus: {
      type: Array as PropType<ControlMenuType[]>,
      default: () => defaultControlMenu,
    },
  },
  components: {
    BaseSvg,
  },
};
</script>

<style lang="scss">
.header-controls {
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: flex-end;

  &__item {
    position: relative;
    cursor: pointer;
    margin: 0 7px;

    ::v-deep svg {
      color: $core-gnb-icon-color;
    }

    .header-link {
      display: flex;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      justify-content: center;
      align-items: center;

      &.a-active,
      &.active,
      &:hover {
        background-color: $core-gnb-active-color;
      }
    }

    &.notification {
      .new {
        width: 5px;
        height: 5px;
        position: absolute;
        top: 19%;
        right: 30%;
        border-radius: 50%;
        background-color: $--color-danger;
      }
    }

    &.profile {
      .profile-photo {
        @include thumbnail(40px, 40px, 50%);

        &:hover::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
