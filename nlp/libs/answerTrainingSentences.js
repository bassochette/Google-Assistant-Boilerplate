module.exports = (lang, intent, trainings) => trainings
  .map((answer) => {
    return {
      lang, intent, answer
    }
  })
