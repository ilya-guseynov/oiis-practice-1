import Fact from './Fact'

export default class Rule {
  private _conditionalFacts: Fact[]
  private _resultFact: Fact

  constructor(conditionalFacts: Fact[], resultFact: Fact) {
    this._conditionalFacts = conditionalFacts
    this._resultFact = resultFact
  }

  get conditionalFacts(): Fact[] {
    return [...this._conditionalFacts]
  }

  get resultFact(): Fact {
    return this._resultFact
  }
}
