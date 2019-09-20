import React, { useState } from "react"
import characters from "../../assets/characters"

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function getRandomCharacters(chars, qty) {
  const randomChars = []

  while (randomChars.length < qty) {
    const index = getRandomIndex(chars.length)

    const char = chars[index]

    if (!randomChars.includes(char)) {
      randomChars.push(char)
    }
  }

  return randomChars
}

function createPossibleAnswers(chars, qty) {
  const indexOfCorrectAnswer = getRandomIndex(qty)
  const characters = getRandomCharacters(chars, qty)

  return characters.map((character, index) => {
    return {
      character,
      isCorrect: index === indexOfCorrectAnswer
    }
  })
}

const MIN_NUM_ANSWERS_TO_DISPLAY = 3
const MAX_NUM_ANSWERS_TO_DISPLAY = 20

const NUM_CORRECT_ANSWERS_TO_ADVANCE = 1
const NUM_INCORRECT_ANSWERS_TO_GO_BACK = -1

export const Game = ({ children }) => {
  const [numPossAnswersToDisplay, setNumPossAnswersToDisplay] = useState(
    MIN_NUM_ANSWERS_TO_DISPLAY
  )
  const [possibleAnswers, setPossibleAnswers] = useState(
    createPossibleAnswers(characters, numPossAnswersToDisplay)
  )
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0)

  /**
   * Resets the possible matches.
   */
  const reset = () => {
    if (
      shouldAddPossAnswerToDisplay(numCorrectAnswers, numPossAnswersToDisplay)
    ) {
      addPossAnswerToDisplay()
    } else if (
      shouldRemovePossAnswerToDisplay(
        numCorrectAnswers,
        numPossAnswersToDisplay
      )
    ) {
      removePossAnswerToDisplay()
    } else {
      setPossibleAnswers(
        createPossibleAnswers(characters, numPossAnswersToDisplay)
      )
    }
  }
  /**
   * Increments the number of correct answers and resets the game.
   */
  const markCorrect = () => {
    setNumCorrectAnswers(numCorrectAnswers + 1)
    reset()
  }
  /**
   * Decrements the number of correct answers.
   */
  const markIncorrect = () => {
    setNumCorrectAnswers(numCorrectAnswers - 1)
  }
  const shouldAddPossAnswerToDisplay = (
    numCorrectAnswers,
    numPossAnswersToDisplay
  ) => {
    const isEnoughToAdvance = numCorrectAnswers > NUM_CORRECT_ANSWERS_TO_ADVANCE
    const hasNotMaxedOut = numPossAnswersToDisplay < MAX_NUM_ANSWERS_TO_DISPLAY

    return isEnoughToAdvance && hasNotMaxedOut
  }
  const shouldRemovePossAnswerToDisplay = (
    numCorrectAnswers,
    numPossAnswersToDisplay
  ) => {
    const isEnoughToGoBack =
      numCorrectAnswers < NUM_INCORRECT_ANSWERS_TO_GO_BACK
    const hasNotHitMin = numPossAnswersToDisplay > MIN_NUM_ANSWERS_TO_DISPLAY

    return isEnoughToGoBack && hasNotHitMin
  }
  const addPossAnswerToDisplay = () => {
    setPossibleAnswers(
      createPossibleAnswers(characters, numPossAnswersToDisplay + 1)
    )
    setNumPossAnswersToDisplay(numPossAnswersToDisplay + 1)
    setNumCorrectAnswers(0)
  }
  const removePossAnswerToDisplay = () => {
    setPossibleAnswers(
      createPossibleAnswers(characters, numPossAnswersToDisplay - 1)
    )
    setNumPossAnswersToDisplay(numPossAnswersToDisplay - 1)
    setNumCorrectAnswers(0)
  }
  return (
    <div className="p-4 w-full h-full">
      {children({ markCorrect, markIncorrect, possibleAnswers })}
    </div>
  )
}
