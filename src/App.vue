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
              :key="section.id"
              :value="section"
              @delete="onDelete(index)"
              @input="onInput(index, ...arguments)"
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
import RandomSection, { RandomSectionModel } from "./components/RandomSection";

@Component({
  components: {
    Button,
    RandomSection,
  },
})
class App extends Vue {
  private sections: RandomSectionModel[] = [];

  onAddSection() {
    this.sections.push(new RandomSectionModel(Date.now()));
  }

  onDelete(deleteIndex: number) {
    this.sections = this.sections.filter(
      (section, index) => index !== deleteIndex
    );
  }

  onInput(inputIndex: number, value: RandomSectionModel) {
    this.sections[inputIndex] = value;
  }
}

export default App;
</script>
