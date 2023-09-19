<script setup lang="ts">
import { reactive } from 'vue';

interface Props {
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'white',
});

const { color } = reactive(props);
</script>

<template>
  <button
    class="btn"
    v-bind:style="{
      backgroundColor: color || 'white',
      color: color ? 'white' : 'black',
    }"
  >
    <slot />
  </button>
</template>
