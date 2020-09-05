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
          <div>{{ output }}</div>
          <Button class="action" block @click="generate()">Generate</Button>
          <Button class="action" block @click="onAddSection()"
            >Add Section</Button
          >
        </div>
        <div class="col-6 sections">
          <div v-if="configuration.sections.length !== 0">
            <RandomSection
              v-for="(section, index) in configuration.sections"
              :key="section.id"
              :value="section"
              @delete="onDelete(index)"
              @input="onInput(index, ...arguments)"
            ></RandomSection>
          </div>
          <div v-else-if="configuration.sections.length === 0">Empty</div>
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
import { RandomSectionModel, RandomConfiguration } from "./services";

@Component({
  components: {
    Button,
    RandomSection,
  },
})
class App extends Vue {
  configuration: RandomConfiguration = new RandomConfiguration();
  output = "Random String";

  onAddSection(): void {
    this.configuration.sections.push(new RandomSectionModel(Date.now()));
  }

  onDelete(deleteIndex: number): void {
    this.configuration.sections = this.configuration.sections.filter(
      (section, index) => index !== deleteIndex
    );
  }

  onInput(inputIndex: number, value: RandomSectionModel): void {
    this.configuration.sections[inputIndex] = value;
  }

  generate(): void {
    if (this.configuration.sections.length === 0) {
      return;
    }

    this.output = this.configuration.toString();
  }
}

export default App;
</script>
