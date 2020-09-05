<template>
  <form class="card container">
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" v-model="value.name" @input="onNameChange" />
    </div>
    <div class="form-group">
      <label>Choices</label>
      <div class="form-check">
        <div>
          <input class="form-check-input" type="checkbox" />
          <label>Numbers</label>
        </div>
        <div>
          <input class="form-check-input" type="checkbox" />
          <label>Letters</label>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { RandomSection } from "./model";

export default Vue.extend({
  props: {
    value: {
      type: Object,
      default: {
        name: "Random Section",
      },
    },
  },
  methods: {
    onNameChange(event: InputEvent) {
      event.stopPropagation();

      this.$emit("input", {
        name: (event.target as HTMLInputElement).value,
      });
    },
  },
});
</script>
