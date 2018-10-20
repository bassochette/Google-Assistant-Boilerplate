const { readdir } = require('fs')

/**
 * TODO: can do better
 */
module.exports = async (path) => {
  return new Promise(
    (resolve, reject) => {
      readdir(
        path,
        (err, files) => {
          if (err) return reject(err)
          const sets = files.reduce(
            (carry, file) => {
              if (file === 'index.js') return carry
              console.log(`Loading data from "${path}/${file}"`)
              return carry
                .concat(require(`${path}/${file}`))
            },
            []
          )
          resolve(sets)
        }
      )
    }
  )
}
