<template>
  <nav
    id="navbar"
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar__section navbar__section--logo">
      <slot name="logo-container" />
    </div>

    <div class="navbar__section navbar__section--header">
      <slot name="menu" />
      <slot name="controls" />
    </div>
    <!-- dropdown -->
    <slot name="dropdown" />
  </nav>
</template

<script lang="ts">
export default {
  name: "AppHeaderLayout",
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 30px;

  &__section {
    height: inherit;

    &--header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
