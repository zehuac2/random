<template>
  <div>
    <div>
      <span>Name</span>
      <input v-model="value.name" @input="onNameChange" />
    </div>
    <span>{{ value.name.length }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RandomSection } from "./model";

export default Vue.extend({
  props: {
    value: {
      type: Object,
      required: false
    }
  },
  methods: {
    onNameChange(event: InputEvent) {
      this.$emit("input", {
        name: (event.target as HTMLInputElement).value
      })
    }
  }
});
</script>
