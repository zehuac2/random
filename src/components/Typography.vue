<style lang="scss" scoped></style>

<template>
  <span :class="className">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    variant: {
      type: String,
      default(): string {
        return "body1";
      },
    },
  },
})
class Typography extends Vue {
  get className(): string {
    return `mdc-typography--${this.$props.variant}`;
  }
}

export default Typography;
</script>
