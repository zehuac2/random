const letters = 'abcdefghijklmnopqrstuvwxyz';

export class RandomSectionModel {
  id: number;
  name = 'New Section';
  length = 5;
  useNumbers = true;
  useLetters = true;

  constructor(id: number) {
    this.id = id;
  }

  clone(): RandomSectionModel {
    const copy = new RandomSectionModel(this.id);
    copy.name = this.name;
    copy.length = this.length;
    copy.useNumbers = this.useNumbers;
    copy.useLetters = this.useLetters;
    return copy;
  }

  toString(): string {
    const choices: string[] = [];
    const output: string[] = [];

    if (this.useLetters) {
      for (let i = 0; i < letters.length; i++) {
        choices.push(letters[i]);
      }
    }

    if (this.useNumbers) {
      for (let i = 0; i < 9; i++) {
        choices.push(i.toString());
      }
    }

    if (choices.length === 0) {
      throw new Error('Cannot create random string from empty choices');
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * choices.length);
      output.push(choices[index]);
    }

    return output.join('');
  }
}

export class RandomConfiguration {
  sections: RandomSectionModel[] = [];

  constructor() {
    this.sections.push(new RandomSectionModel(Date.now()));
  }

  toString(): string {
    return this.sections.map((section) => section.toString()).join('-');
  }
}
