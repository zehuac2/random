const letters: string = "abcdefghijklmnopqrstuvwxyz";

export class RandomSectionModel {
  id: number;
  name: string = "New Section";
  length: number = 5;
  useNumbers: boolean = true;
  useLetters: boolean = true;

  constructor(id: number) {
    this.id = id;
  }

  clone(): RandomSectionModel {
    let copy = new RandomSectionModel(this.id);
    copy.name = this.name;
    copy.length = this.length;
    this.useNumbers = this.useNumbers;
    this.useLetters = this.useLetters;

    return copy;
  }

  toString(): string {
    let choices: string[] = [];
    let output: string[] = [];

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
      throw new Error("Cannot create random string from empty choices");
    }

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * choices.length);
      output.push(choices[index]);
    }

    return output.join("");
  }
}

export class RandomConfiguration {
  sections: RandomSectionModel[] = [];

  toString(): string {
    return this.sections.map((section) => section.toString()).join("-");
  }
}
