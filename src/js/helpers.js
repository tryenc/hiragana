import correct from "../assets/sfx/correct.wav"
import incorrect from "../assets/sfx/incorrect.wav"

/**
 * Computes whether a value is the correct answer, the incorrect answer,
 * or neither if it hasn't been guessed yet.
 *
 * @param {string} correctAnswer
 * @param {string[]} guessedValues values which have already been guessed
 * @param {string} value the value whose "correctness" we're computing
 */
export function computeIsCorrect(correctAnswer, guessedValues, value) {
  if (guessedValues.includes(value)) {
    if (value === correctAnswer) {
      return true
    }
    return false
  }
}

export function playAudio(audioPath) {
  const pronunciation = new Audio(audioPath)
  return new Promise(resolve => {
    pronunciation.addEventListener("ended", () => {
      resolve()
    })
    pronunciation.play()
  })
}

export function playCorrect() {
  return playAudio(correct)
}

export function playIncorrect() {
  return playAudio(incorrect)
}
