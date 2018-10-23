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
          console.log(files)
          if (err) return reject(err)
          const sets = files.reduce(
            (carry, file) => {
              if (file === 'index.js') return carry
              if (file.split('.js').length < 2) return carry
              const set = require(`${path}/${file}`)
              return carry
                .concat(set)
            },
            []
          )
          resolve(sets)
        }
      )
    }
  )
}
