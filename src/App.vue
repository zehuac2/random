<style lang="scss" scoped>
.app {
  height: 100vh;
  padding: 24px;
}

.about {
  margin-top: 50px;
}

.sections {
  height: 100vh;
  overflow-y: scroll;
}

.main-action {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>

<template>
  <div class="app">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <!--Output-->
          <Typography variant="headline6">{{ output }}</Typography>
          <!--Actions-->
          <div class="main-action">
            <Button block @click="generate()">Generate</Button>
          </div>
          <div class="main-action">
            <Button block color="secondary" @click="onAddSection()"
              >Add Section</Button
            >
          </div>
          <!--About Info-->
          <div class="about">
            <div>
              <Typography variant="subtitle1"
                >Random String Generator</Typography
              >
            </div>
            <div>
              <Typography variant="subtitle2">Zehua Chen © 2020</Typography>
            </div>
          </div>
        </div>
        <div class="col-6 sections">
          <!--Sections-->
          <div v-if="configuration.sections.length !== 0">
            <RandomSection
              v-for="(section, index) in configuration.sections"
              :key="section.id"
              :value="section"
              @delete="onDelete(index)"
              @input="onInput(index, ...arguments)"
            ></RandomSection>
          </div>
          <!--Empty-->
          <Typography
            variant="headline6"
            v-else-if="configuration.sections.length === 0"
          >
            Empty
          </Typography>
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
