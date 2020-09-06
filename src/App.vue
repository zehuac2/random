<style lang="scss" scoped>
@use "./styles/colors";

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  // padding: 24px;
}

.main {
  padding-top: 16px;
  flex-grow: 1;
  overflow: scroll;
}

.main-bottomspace {
  height: 10px;
}

.bottombar {
  flex-grow: 0;
  flex-shrink: 0;
  border-top: 1px solid lightgrey;
  padding-bottom: 8px;
  background: colors.$surface;
}

.bottombar-section {
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>

<template>
  <div class="app">
    <div class="main container">
      <RandomSection
        v-for="(section, index) in configuration.sections"
        :key="section.id"
        :value="section"
        @delete="onDelete(index, ...arguments)"
      >
      </RandomSection>
      <div class="main-bottomspace"></div>
    </div>
    <div class="bottombar">
      <div class="container">
        <div class="row">
          <div class="col-12 bottombar-section">
            <Typography variant="headline6">{{ output }}</Typography>
          </div>
          <div class="col-12 bottombar-section">
            <Button block @click="onGenerate">Generate</Button>
          </div>
          <div class="col-12 bottombar-section">
            <Button color="secondary" block @click="onAddSection"
              >Add Sections</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Button from "./components/Button.vue";
import Typography from "./components/Typography.vue";
import RandomSection from "./components/RandomSection";
import { RandomSectionModel, RandomConfiguration } from "./services";

@Component({
  components: {
    Button,
    RandomSection,
    Typography,
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

  onGenerate(): void {
    if (this.configuration.sections.length === 0) {
      this.output = "Must have at least one section";
      return;
    }

    this.output = this.configuration.toString();
  }
}

export default App;
</script>
