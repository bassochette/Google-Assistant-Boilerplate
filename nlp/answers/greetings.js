const {
  GREETINGS_HELLO,
  GREETINGS_BYE
} = require('../intentsIndex')

module.exports = [
  {lang: "fr", answer:"Bonjour", intent: GREETINGS_HELLO},
  {lang: "fr", answer:"Á Bientôt!", intent: GREETINGS_BYE},
  {lang: "en", answer:"Hi", intent: GREETINGS_HELLO},
  {lang: "en", answer:"See you later.", intent: GREETINGS_BYE}
]
