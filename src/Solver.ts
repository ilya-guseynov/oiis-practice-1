import Fact from './Fact'
import Rule from './Rule'
import KnowlegdeBase from './KnowledgeBase'

export default class Solver {
  private _knowlegdeBase: KnowlegdeBase
  private _workMemoryFacts: Fact[]
  private _rules: Rule[]

  constructor(knowlegdeBase: KnowlegdeBase, initialFactTexts: string[]) {
    this._knowlegdeBase = knowlegdeBase
    this._rules = [...knowlegdeBase.rules]
    this._workMemoryFacts = [...initialFactTexts.map((text: string) => knowlegdeBase.getFactWithText(text))]
  }

  printDirectOutputAnswer(): void {
    console.log('=============================================================================')
    console.log('Прямой вывод')
    console.log()
    console.log('Рабочая память', this._workMemoryFacts.map(fact => fact.text))
    console.log()

    let checkOneMoreTime: boolean = true

    while (true) {
      for (let rule of this._rules) {
        if (this._hasFactsForRule(rule)) {
          checkOneMoreTime = true
          this._workMemoryFacts.push(rule.resultFact)
          this._rules = this._rules.filter((filterRule: Rule) => filterRule !== rule)
          console.log(`Рабочая память`, this._workMemoryFacts.map(fact => fact.text))
          console.log()
        }
      }

      if (!checkOneMoreTime) {
        break
      }

      checkOneMoreTime = false
    }

    console.log(this._workMemoryFacts[this._workMemoryFacts.length - 1].text)
    console.log('=============================================================================')
  }

  printReverseOutputAnswer(goalText: string): void {
    console.log('=============================================================================')
    const goals: Fact[] = []
    goals.push(this._knowlegdeBase.getFactWithText(goalText))

    console.log('Обратный вывод')
    console.log()
    console.log(`Рабочая память`, this._workMemoryFacts.map(fact => fact.text))
    console.log(`Гипотезы`, goals.map(fact => fact.text))
    console.log()

    while (true) {
      for (let rule of this._rules) {
        if (rule.resultFact.index === goals[goals.length - 1].index) {
          let used = true
          for (let conditionalFact of rule.conditionalFacts) {
            if (!this._workMemoryFacts.includes(conditionalFact)) {
              used = false
              goals.push(conditionalFact)
              break
            }
          }

          if (used) {
            goals.pop()
            this._workMemoryFacts.push(rule.resultFact)
          }

          break
        }
      }

      console.log(`Рабочая память`, this._workMemoryFacts.map(fact => fact.text))
      console.log(`Гипотезы`, goals.map(fact => fact.text))
      console.log()

      if (goals.length === 0) {
        break
      }
    }

    console.log(this._workMemoryFacts[this._workMemoryFacts.length - 1].text)
    console.log('=============================================================================')
  }

  private _hasFactsForRule(rule: Rule): boolean {
    let hasFacts: boolean = true

    rule.conditionalFacts.forEach((conditionalFact: Fact) => {
      if (!this._workMemoryFacts.map((memoryFact: Fact) => memoryFact.index).includes(conditionalFact.index)) {
        hasFacts = false
      }
    })

    return hasFacts
  }
}