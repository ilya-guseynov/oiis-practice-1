import Solver from './Solver'
import KnowlegdeBase from './KnowledgeBase'

export default class KnowledgeBasedSystem {
  private _knowlegdeBase: KnowlegdeBase

  constructor() {
    this._knowlegdeBase = new KnowlegdeBase()
  }

  addFact(newFactText: string): void {
    this._knowlegdeBase.addFact(newFactText)
  }

  addRule(newRuleText: string): void {
    this._knowlegdeBase.addRule(newRuleText)
  }

  printDirectOutputAnswer(initialFactTexts: string[]): void {
    new Solver(this._knowlegdeBase, initialFactTexts).printDirectOutputAnswer()
  }

  printReverseOutputAnswer(initialFactTexts: string[], goal: string): void {
    new Solver(this._knowlegdeBase, initialFactTexts).printReverseOutputAnswer(goal)
  }
}