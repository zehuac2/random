<style lang="scss" scoped></style>

<template>
  <span :class="className">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default(): string {
      return 'body1';
    },
  },
});

const className = computed(() => `mdc-typography--${props.variant}`);
</script>
