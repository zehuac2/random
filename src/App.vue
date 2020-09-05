<style scoped>
</style>

<template>
  <div class="container">
    <RandomSection v-model="section"></RandomSection>
    <h1>{{ section.name.length }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./components/Button.vue";
import RandomSection from "./components/RandomSection";

export default Vue.extend({
  components: {
    Button,
    RandomSection
  },
  data() {
    return {
      section: {
        name: "Wierd"
      }
    }
  },
  methods: {
  }
});
</script>
