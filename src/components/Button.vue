<template>
  <button :class="className" v-on:click="onClick">
    <slot></slot>
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
        return "primary";
      },
    },
  },
})
class Button extends Vue {
  get className(): string {
    let classes: string[] = ["btn"];

    if (this.$props.block) {
      classes.push("btn-block");
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
