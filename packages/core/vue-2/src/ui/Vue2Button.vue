<script lang="ts">
export default {
  name: 'Vue2Button',
  props: {
    bgColor: String,
    onClick: Function,
  },
  data() {
    return {
      bgColor: 'white',
      onClick: () => {},
    };
  },
};
</script>

<template>
  <button
    class="btn"
    v-on:click="onClick"
    v-bind:style="{
      backgroundColor: bgColor || 'white',
      color: bgColor ? 'white' : 'black',
    }"
  >
    <slot />
  </button>
</template>
