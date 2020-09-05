<style lang="sass" scoped></style>

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
    block: {
      type: Boolean,
      default() {
        return false;
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
    let classes: string[] = ["mdc-button"];

    if (this.$props.variant) {
      classes.push(`mdc-button--${this.$props.variant}`);
    }

    classes.push(`btn-${this.$props.variant}`);

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
