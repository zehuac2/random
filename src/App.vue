<style scoped>
.page {
  height: 100vh;
  padding: 24px;
}

.sections {
  height: 100%;
  overflow-y: auto;
}

.confirm-button {
  margin-top: 8px;
}
</style>

<template>
  <div class="bg-light">
    <div class="container page">
      <div class="row">
        <div class="col-6">
          <div>Results Goes Here</div>
          <Button class="confirm-button" block>Generate</Button>
        </div>
        <div class="col-6 sections">
          <RandomSection
            v-for="(section, index) in sections"
            :key="index"
            :value="section"
          ></RandomSection>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./components/Button.vue";
import RandomSection from "./components/RandomSection";

export default Vue.extend({
  components: {
    Button,
    RandomSection,
  },
  data() {
    return {
      sections: [
        { name: "Section 1" },
        { name: "Section 2" },
        { name: "Section 3" },
        { name: "Section 4" },
        { name: "Section 5" },
      ],
    };
  },
  methods: {},
});
</script>
