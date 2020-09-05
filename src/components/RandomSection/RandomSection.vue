<style scoped>
.head {
  margin-top: 16px;
}
</style>

<template>
  <form class="card container">
    <div class="form-group head">
      <input
        class="form-control"
        placeholder="Name"
        v-model="value.name"
        @input="onNameChange"
      />
    </div>
    <div class="form-group">
      <input class="form-control" placeholder="Length" />
    </div>
    <div class="form-group">
      <label>Choices</label>
      <div class="form-check">
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            :checked="value.useNumbers"
            @click="toggleUseNumbers"
          />
          <label>Numbers</label>
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            :checked="value.useLetters"
            @click="toggleUseLetters"
          />
          <label>Letters</label>
        </div>
      </div>
      <Button block variant="danger" @click="onDelete">Delete</Button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Button from "../Button.vue";

@Component({
  components: {
    Button,
  },
  props: {
    value: {
      type: Object,
      default: {
        name: "Random Section",
        useNumbers: false,
        useLetters: false,
      },
    },
  },
})
class RandomSection extends Vue {
  onNameChange(event: InputEvent) {
    event.preventDefault();

    let value = { ...this.$props.value };
    value.name = (event.target as HTMLInputElement).value;

    this.$emit("input", name);
  }

  toggleUseNumbers() {
    let value = { ...this.$props.value };
    value.useNumbers = !value.useNumbers;

    this.$emit("input", value);
  }

  toggleUseLetters() {
    let value = { ...this.$props.value };
    value.useLetters = !value.useLetters;

    this.$emit("input", value);
  }

  onDelete(event: MouseEvent) {
    event.preventDefault();

    this.$emit("delete", event);
  }
}

export default RandomSection;
</script>
