<template>
  <label ref="container" class="mdc-text-field mdc-text-field--outlined">
    <input
      type="text"
      class="mdc-text-field__input"
      aria-labelledby="my-label-id"
      :value="modelValue"
      @input="onInput"
    />
    <span class="mdc-notched-outline">
      <span class="mdc-notched-outline__leading"></span>
      <span class="mdc-notched-outline__notch">
        <span class="mdc-floating-label" id="my-label-id">{{ label }}</span>
      </span>
      <span class="mdc-notched-outline__trailing"></span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref } from 'vue';
import { MDCTextField } from '@material/textfield';

const props = defineProps({
  label: {
    type: String,
    default() {
      return 'Label';
    },
  },
  modelValue: {
    type: [String, Number],
    default() {
      return '';
    },
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const container = ref<HTMLElement | null>(null);

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}

onMounted(() => {
  new MDCTextField(container.value as Element);
});
</script>
