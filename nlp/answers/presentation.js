const {
    WHO_AM_I
} = require('../intentsIndex')
const answerTrainingSentences = require('../libs/answerTrainingSentences')
module.exports = answerTrainingSentences("fr", WHO_AM_I, [
    "Je suis un assistant qui à besoin d'être développé...",
]).concat(
  answerTrainingSentences("en", WHO_AM_I, [
      "I am an assistant that need to be developped...",
  ]
)
