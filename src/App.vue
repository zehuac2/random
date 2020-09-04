<style scoped>
</style>

<template>
  <div>
    <RandomSection v-model="section"></RandomSection>
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
    click() {
      console.log("Asshole")
    }
  }
});
</script>
