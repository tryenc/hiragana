import correct from "../assets/sfx/correct.wav"
import incorrect from "../assets/sfx/incorrect.wav"
import * as pronunciations from "../assets/pronunciation/index"

/**
 * Computes whether a value is the correct answer, the incorrect answer,
 * or neither if it hasn't been guessed yet.
 *
 * @param {string} correctAnswer
 * @param {string[]} guessedValues values which have already been guessed
 * @param {string} value the value whose "correctness" we're computing
 */
export function computeWasCorrectlyGuessed(
  correctAnswer,
  guessedValues,
  value
) {
  if (guessedValues.includes(value)) {
    if (value === correctAnswer) {
      return true
    }
    return false
  }
}

export function getGuessedClasses(wasCorrectlyGuessed) {
  if (wasCorrectlyGuessed === true) {
    return "text-white bg-green-500"
  }
  if (wasCorrectlyGuessed === false) {
    return "text-white bg-red-600"
  }
}

export function playAudio(audioPath) {
  const pronunciation = new Audio(audioPath)
  return new Promise(resolve => {
    pronunciation.addEventListener(
      "ended",
      () => {
        resolve()
      },
      { once: true } // The once option removes the listener after it's been invoked
    )
    pronunciation.play()
  })
}

export function playCorrect() {
  return playAudio(correct)
}

export function playIncorrect() {
  return playAudio(incorrect)
}

export function playPronunciation(character) {
  const pronunciation = pronunciations[character]

  return playAudio(pronunciation)
}
