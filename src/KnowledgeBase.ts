import Fact from './Fact'
import Rule from './Rule'

export default class KnowlegdeBase {
  private _facts: Fact[]
  private _rules: Rule[]

  constructor() {
    this._facts = []
    this._rules = []
  }

  get rules(): Rule[] {
    return this._rules
  }

  addFact(newFactText: string): void {
    this._facts.push(new Fact(this._facts.length + 1, newFactText))
  }

  addRule(newRuleText: string): void {
    const conditionalFactTexts: string[] = newRuleText.split(' то ')[0].split(' и ')
    const resultFactText: string = newRuleText.split(' то ')[1]

    const facts: Fact[] = conditionalFactTexts.map((text: string) => this.getFactWithText(text))
    const resultFact: Fact = this.getFactWithText(resultFactText)

    this._rules.push(new Rule(facts, resultFact))
  }

  getFactWithText(text: string): Fact {
    for (let fact of this._facts) {
      if (fact.text === text) {
        return fact
      }
    }

    throw new Error(`Fact '${ text }' doesn't exists`)
  }
}