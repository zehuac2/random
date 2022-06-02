<style lang="scss" scoped>
@use '../styles/colors';
@use '@material/button';

.raised-secondary {
  @include button.filled-accessible(colors.$secondary);
}

.block {
  width: 100%;
}
</style>

<template>
  <div class="mdc-touch-target-wrapper">
    <button ref="container" :class="className">
      <div class="mdc-button__ripple"></div>
      <span class="mdc-button__label">
        <slot></slot>
      </span>
      <div class="mdc-button__touch"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, computed } from 'vue';
import { MDCRipple } from '@material/ripple';

const container = ref(null);

const props = defineProps({
  color: {
    type: String,
    default(): string {
      return 'primary';
    },
  },
  variant: {
    type: String,
    default(): string {
      return 'raised';
    },
  },
  block: {
    type: Boolean,
    default(): boolean {
      return false;
    },
  },
});

const className = computed(() => {
  const { color, variant, block } = props;
  let classes: string[] = ['mdc-button'];

  if (variant) {
    classes.push(`mdc-button--${variant}`);
  }

  classes.push(`${variant}-${color}`);

  if (block) {
    classes.push('block');
  }

  return classes.join(' ');
});

onMounted(() => {
  new MDCRipple(container.value as unknown as Element);
});
</script>
