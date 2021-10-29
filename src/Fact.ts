export default class Fact {
  private _index: number
  private _text: string

  constructor(index: number, text: string) {
    this._index = index
    this._text = text
  }

  get index(): number {
    return this._index
  }

  get text(): string {
    return this._text
  }
}
