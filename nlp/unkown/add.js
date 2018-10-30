const unkown = require('../db/unkown')

module.exports = async (data, understood) => {
  await unkown.create({
    data,
    understood,
    created: new Date()
  })
}
