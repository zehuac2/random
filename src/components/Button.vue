<style lang="scss" scoped>
@use "../styles/colors";
@use "@material/button";

.raised-secondary {
  @include button.filled-accessible(colors.$secondary);
}
</style>

<template>
  <div class="mdc-touch-target-wrapper">
    <button ref="container" :class="className" @click="onClick">
      <div class="mdc-button__ripple"></div>
      <span class="mdc-button__label">
        <slot></slot>
      </span>
      <div class="mdc-button__touch"></div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MDCRipple } from "@material/ripple";

@Component({
  props: {
    color: {
      type: String,
      default() {
        return "primary";
      },
    },
    variant: {
      type: String,
      default() {
        return "raised";
      },
    },
  },
})
class Button extends Vue {
  get className(): string {
    const { color, variant } = this.$props;
    let classes: string[] = ["mdc-button"];

    if (variant) {
      classes.push(`mdc-button--${variant}`);
    }

    classes.push(`${variant}-${color}`);

    return classes.join(" ");
  }

  mounted(): void {
    new MDCRipple(this.$refs.container as Element);
  }

  onClick(event: MouseEvent): void {
    this.$emit("click", event);
  }
}

export default Button;
</script>
