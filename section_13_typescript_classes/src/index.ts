class Player {
  // Once you set first and last you can't change them (readonly)
  public readonly first: string;
  public readonly last: string;

  public score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log('Secret method');
  }
}

const elton = new Player('Elton', 'Steele');
console.log(elton)
