<script setup lang="ts">
import { reactive } from 'vue';

interface Props {
  color?: string;
  onClick: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'white',
  onClick: () => {},
});

const { color } = reactive(props);
</script>

<template>
  <button
    class="btn"
    v-bind:onClick="onClick"
    v-bind:style="{
      backgroundColor: color || 'white',
      color: color ? 'white' : 'black',
    }"
  >
    <slot />
  </button>
</template>
