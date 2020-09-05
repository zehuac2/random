<style scoped>
.page {
  height: 100vh;
  padding: 24px;
}

.sections {
  height: 100%;
  overflow-y: auto;
}

.action {
  margin-top: 8px;
}
</style>

<template>
  <div class="bg-light">
    <div class="container page">
      <div class="row">
        <div class="col-6">
          <div>Results Goes Here</div>
          <Button class="action" block>Generate</Button>
          <Button class="action" variant="secondary" block @click="onAddSection"
            >Add Section</Button
          >
        </div>
        <div class="col-6 sections">
          <div v-if="sections.length !== 0">
            <RandomSection
              v-for="(section, index) in sections"
              :key="index"
              :value="section"
              @delete="onDelete(index)"
            ></RandomSection>
          </div>
          <div v-if="sections.length === 0">Empty</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Button from "./components/Button.vue";
import RandomSection from "./components/RandomSection";

@Component({
  components: {
    Button,
    RandomSection,
  },
})
class App extends Vue {
  private sections: any[] = [
    { name: "Section 1", useNumbers: true },
    { name: "Section 2" },
    { name: "Section 3" },
    { name: "Section 4" },
    { name: "Section 5" },
  ];

  onAddSection() {
    this.sections.push({
      name: "New Section",
    });
  }

  onDelete(deleteIndex: number) {
    this.sections = this.sections.filter(
      (section, index) => index !== deleteIndex
    );
  }
}

export default App;
</script>
