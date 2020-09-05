<template>
  <label ref="container" class="mdc-text-field mdc-text-field--outlined">
    <input
      type="text"
      class="mdc-text-field__input"
      aria-labelledby="my-label-id"
      :value="value"
      @input="onInput"
    />
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading"></span>
      <span class="mdc-notched-outline__notch">
        <span class="mdc-floating-label" id="my-label-id">{{ label }}</span>
      </span>
      <span class="mdc-notched-outline__trailing"></span>
    </span>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MDCTextField } from "@material/textfield";

@Component({
  props: {
    label: {
      type: String,
      default() {
        return "Label";
      },
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
  },
})
class TextField extends Vue {
  mounted() {
    new MDCTextField(this.$refs.container as Element);
  }

  onInput(event: InputEvent) {
    this.$emit("input", (event.target as HTMLInputElement).value);
  }
}

export default TextField;
</script>
