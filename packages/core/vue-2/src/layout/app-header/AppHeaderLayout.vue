<script lang="ts">
export default {
  name: "AppHeaderLayout",
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
  },
};
</script>

<template>
  <nav
    id="navbar"
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar__section navbar__section--logo">
      <a :href="logoRouteUrl" class="navbar-logo">
        <img
          v-if="currentLogo"
          :src="currentLogo"
          class="navbar-logo__img"
          alt="Brand Logo"
        />
        <slot name="skeleton-logo" v-else />
      </a>
    </div>
    <div class="navbar__section navbar__section--header">
      <slot name="skeleton-menus" v-if="isLoading" />
      <slot name="menus" v-else />

      <slot name="skeleton-controls" v-if="isLoading" />
      <slot name="controls" v-else />
    </div>

    <!-- dropdown -->
    <slot name="dropdown" v-if="!isLoading && isOpenDropdown" />
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 30px;

  &__section {
    height: inherit;

    &--logo {
      .navbar-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;
        width: 162px;
        cursor: pointer;

        &__img {
          width: 162px;
          height: 60px;
        }
      }
    }

    &--header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
