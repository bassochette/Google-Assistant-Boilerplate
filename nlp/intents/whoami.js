const {
  WHO_AM_I
} = require('../intentsIndex')

const intentTrainingSentences = require('../libs/intentTrainingSentences')

module.exports = intentTrainingSentences("fr", WHO_AM_I,
  [
    "qui es tu?",
    "D'ou viens tu?",
    "qu'es ce que tu fais dans la vie?",
    "wesh gros c'est quoi ton taf?",
    "asv",
    "t'es qui?",
    "comment tu t'appelle?",
    "comment tu t'appel?"
  ]
)
