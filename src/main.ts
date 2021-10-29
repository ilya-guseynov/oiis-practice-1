import KnowledgeBasedSystem from './KnowledgeBasedSystem'

function main(): void {
  const knowledgeBasedSystem: KnowledgeBasedSystem = new KnowledgeBasedSystem()

  knowledgeBasedSystem.addFact('иметь необходимоть купить/обновить компьютер')
  knowledgeBasedSystem.addFact('хотеть играть в игры')
  knowledgeBasedSystem.addFact('иметь много денег')
  knowledgeBasedSystem.addFact('иметь мало денег')
  knowledgeBasedSystem.addFact('ехать в официальный магазин')
  knowledgeBasedSystem.addFact('ехать в б/у магазин')
  knowledgeBasedSystem.addFact('выбирать из готовых наборов')
  knowledgeBasedSystem.addFact('собирать компьютер самому')
  knowledgeBasedSystem.addFact('выбирать в зависимости от цены')
  knowledgeBasedSystem.addFact('выбирать в зависимости от мощности')
  knowledgeBasedSystem.addFact('покупать очень мощный компьютер')
  knowledgeBasedSystem.addFact('собирать бюджетный компьютер')

  knowledgeBasedSystem.addRule('собирать компьютер самому и выбирать в зависимости от цены и ехать в б/у магазин то собирать бюджетный компьютер')
  knowledgeBasedSystem.addRule('выбирать в зависимости от мощности и выбирать из готовых наборов и ехать в официальный магазин то покупать очень мощный компьютер')
  knowledgeBasedSystem.addRule('выбирать в зависимости от цены и хотеть играть в игры то собирать компьютер самому')
  knowledgeBasedSystem.addRule('выбирать из готовых наборов и хотеть играть в игры то выбирать в зависимости от мощности')
  knowledgeBasedSystem.addRule('хотеть играть в игры и ехать в б/у магазин то выбирать в зависимости от цены')
  knowledgeBasedSystem.addRule('хотеть играть в игры и ехать в официальный магазин то выбирать из готовых наборов')
  knowledgeBasedSystem.addRule('иметь мало денег и иметь необходимоть купить/обновить компьютер то ехать в б/у магазин')
  knowledgeBasedSystem.addRule('иметь много денег и иметь необходимоть купить/обновить компьютер то ехать в официальный магазин')

  knowledgeBasedSystem.printDirectOutputAnswer([ 'иметь много денег', 'иметь необходимоть купить/обновить компьютер', 'хотеть играть в игры' ])
  knowledgeBasedSystem.printDirectOutputAnswer([ 'иметь мало денег', 'иметь необходимоть купить/обновить компьютер', 'хотеть играть в игры' ])

  knowledgeBasedSystem.printReverseOutputAnswer([ 'иметь много денег', 'иметь необходимоть купить/обновить компьютер', 'хотеть играть в игры' ], 'покупать очень мощный компьютер')
  knowledgeBasedSystem.printReverseOutputAnswer([ 'иметь мало денег', 'иметь необходимоть купить/обновить компьютер', 'хотеть играть в игры' ], 'собирать бюджетный компьютер')
}

main()
