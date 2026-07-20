import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RandomSectionModel } from '../services';

export type SectionState = {
  id: number;
  name: string;
  length: number;
  useNumbers: boolean;
  useLetters: boolean;
};

export type RandomState = {
  output: string;
  sections: SectionState[];
};

function toPlain(section: RandomSectionModel): SectionState {
  return {
    id: section.id,
    name: section.name,
    length: section.length,
    useNumbers: section.useNumbers,
    useLetters: section.useLetters,
  };
}

function toModel(section: SectionState): RandomSectionModel {
  const model = new RandomSectionModel(section.id);
  model.name = section.name;
  model.length = section.length;
  model.useNumbers = section.useNumbers;
  model.useLetters = section.useLetters;
  return model;
}

const initialState: RandomState = {
  output: 'Random String',
  sections: [toPlain(new RandomSectionModel(Date.now()))],
};

const randomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {
    addSection(state) {
      state.sections.push(toPlain(new RandomSectionModel(Date.now())));
    },
    deleteSection(state, action: PayloadAction<number>) {
      state.sections = state.sections.filter(
        (_, index) => index !== action.payload,
      );
    },
    updateSection(
      state,
      action: PayloadAction<{ index: number; section: SectionState }>,
    ) {
      const { index, section } = action.payload;
      state.sections[index] = section;
    },
    generate(state) {
      if (state.sections.length === 0) {
        state.output = 'Must have at least one section';
        return;
      }

      state.output = state.sections
        .map((section) => toModel(section).toString())
        .join('-');
    },
  },
});

export const { addSection, deleteSection, updateSection, generate } =
  randomSlice.actions;
export { toModel, toPlain };
export default randomSlice.reducer;
