<script lang="ts">
export default {
  name: "AppHeaderLayout",
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
      <slot name="logo" />
    </div>

    <div class="navbar__section navbar__section--header">
      <slot name="menus" />
      <slot name="controls" />
    </div>

    <!-- dropdown -->
    <slot name="dropdown" />
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
