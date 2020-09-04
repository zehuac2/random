<template>
  <button class="btn btn-primary" v-on:click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    onClick(event: MouseEvent) {
      this.$emit("click", event);
    }
  }
});
</script>
