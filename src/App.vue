<style lang="scss" scoped>
@use './styles/colors';

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  margin-bottom: 8px;
}
</style>

<template>
  <div class="app">
    <div class="main container">
      <RandomSection
        v-for="(section, index) in configuration.sections"
        :key="section.id"
        :value="section"
        @delete="onDelete(index)"
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

<script setup lang="ts">
import { ref } from 'vue';
import Button from './components/Button.vue';
import Typography from './components/Typography.vue';
import RandomSection from './components/RandomSection';
import { RandomSectionModel, RandomConfiguration } from './services';

const output = ref('Random String');
const configuration = ref(new RandomConfiguration());

function onAddSection(): void {
  configuration.value.sections.push(new RandomSectionModel(Date.now()));
}

function onDelete(deleteIndex: number): void {
  configuration.value.sections = configuration.value.sections.filter(
    (section, index) => index !== deleteIndex
  );
}

function onGenerate(): void {
  if (configuration.value.sections.length === 0) {
    output.value = 'Must have at least one section';
    return;
  }

  output.value = configuration.value.toString();
}

// @Component({
//   components: {
//     Button,
//     RandomSection,
//     Typography,
//   },
// })
// class App extends Vue {
//   configuration: RandomConfiguration = new RandomConfiguration();
//   output = "Random String";

//   onAddSection(): void {
//     this.configuration.sections.push(new RandomSectionModel(Date.now()));
//   }

//   onDelete(deleteIndex: number): void {
//     this.configuration.sections = this.configuration.sections.filter(
//       (section, index) => index !== deleteIndex
//     );
//   }

//   onGenerate(): void {
//     if (this.configuration.sections.length === 0) {
//       this.output = "Must have at least one section";
//       return;
//     }

//     this.output = this.configuration.toString();
//   }
// }

// export default App;
</script>
