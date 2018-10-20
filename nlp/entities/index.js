const loader = require('../libs/loader')
module.exports = async (manager) => {
  const entities = await loader(__dirname)
  for (entity of entities) {
    manager.addNamedEntityText(
      entity.type,
      entity.name,
      entity.lang,
      entity.synonyms,
    );
  }
  return manager
}
