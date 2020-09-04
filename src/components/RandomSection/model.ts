export enum RandomChoice {
  NUMBERS = 1,
  CHARS = 2
}

export interface RandomSection {
  name: string;
  choices: RandomChoice;
}
