<style lang="scss" scoped>
$std-padding: 8px;

@mixin card-row-base {
  padding: $std-padding;
}

.card-row {
  @include card-row-base();
}

.card-row-textfield {
  width: 100%;
}

.card-first-row {
  @include card-row-base();
  padding-top: 16px;
}

.title {
  font-size: 17px;
  font-weight: 500;
}
</style>

<template>
  <form class="mdc-card mdc-card--outlined card">
    <div class="card-first-row">
      <TextField
        class="card-row-textfield"
        label="Name"
        v-model="value.name"
      ></TextField>
    </div>
    <div class="card-row">
      <TextField
        class="card-row-textfield"
        label="Length"
        v-model.number="value.length"
        type="number"
      ></TextField>
    </div>
    <div class="card-row">
      <span class="title">Choices</span>
      <div class="form-check">
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            v-model="value.useNumbers"
          />
          <label>Numbers</label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            v-model="value.useLetters"
          />
          <label>Letters</label>
        </div>
      </div>
    </div>
    <div class="mdc-card__actions">
      <Button
        class="mdc-card__action mdc-card__action-button"
        block
        variant="outlined"
        @click="onDelete"
        >Delete</Button
      >
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Button from "../Button.vue";
import TextField from "../TextField.vue";
import { RandomSectionModel } from "../../services";

@Component({
  components: {
    Button,
    TextField,
  },
  props: {
    value: {
      type: RandomSectionModel,
      default() {
        return new RandomSectionModel(0);
      },
    },
  },
})
class RandomSection extends Vue {
  onDelete(event: MouseEvent) {
    event.preventDefault();

    this.$emit("delete", event);
  }
}

export default RandomSection;
</script>
