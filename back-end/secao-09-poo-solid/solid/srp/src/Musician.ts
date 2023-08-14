// Musician.ts
import Flute from './Flute';

export default class Musician {
  public flute: Flute;

  constructor(public name: string) {
    this.flute = new Flute('minha flauta');
  }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const musician = new Musician('Márcia');
musician.play();