module.exports = (lang, intent, trainings) => trainings
  .map((data) => {
    return {
      lang, intent, data
    }
  })
