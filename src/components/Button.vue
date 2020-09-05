<style lang="sass" scoped></style>

<template>
  <button :class="className" v-on:click="onClick">
    <span class="mdc-button__label">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

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

  onClick(event: MouseEvent) {
    this.$emit("click", event);
  }
}

export default Button;
</script>
