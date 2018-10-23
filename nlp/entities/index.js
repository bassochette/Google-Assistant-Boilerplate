const loader = require('../libs/loader')
module.exports = async (manager) => {
  const entities = await loader(__dirname)
  const userEntities = await loader(`${__dirname}/../../entities`)
  entities.concat(userEntities)
  for (entity of entities) {
    if (!entity) continue
    manager.addNamedEntityText(
      entity.type,
      entity.name,
      entity.lang,
      entity.synonyms,
    );
  }
  return manager
}
