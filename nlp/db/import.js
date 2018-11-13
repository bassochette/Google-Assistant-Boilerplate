const db = require("../db");

const importIntents = require('../intents/import')
const importEntities = require('../entities/import')
const importAnswers = require('../answers/import')

const importer = async () => {
  try {
    await db.intent.collection.drop()
    await db.entity.collection.drop()
    await db.answer.collection.drop()
  } catch (error) {
    console.log(error)
  }
  await importIntents()
  await importEntities()
  await importAnswers()
}

importer()
  .then(
    () => process.exit(0)
  )
  .catch(
    (error) => {
      console.log("error while importing bot data", error)
      process.exit(1)
    }
  )
