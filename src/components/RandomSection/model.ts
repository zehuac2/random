export class RandomSectionModel {
  id: number;
  name: string = "New Section";
  length: number = 5;
  useNumbers: boolean = false;
  useLetters: boolean = false;

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
}
