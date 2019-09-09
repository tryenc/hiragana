import React, { useState } from "react"
import characters from "../../assets/characters"
import { MatchPronunciationRound } from "../MatchPronunciationRound/MatchPronunciationRound"

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

export const MatchPronunciation = () => {
  const numberPossibleAnswersToDisplay = 4

  const [state, setState] = useState({
    possibleAnswers: getRandomCharacters(
      characters,
      numberPossibleAnswersToDisplay
    ),
    indexOfCorrectAnswer: getRandomIndex(numberPossibleAnswersToDisplay)
  })

  const resetRound = () => {
    console.log("reset called")
    setState({
      possibleAnswers: getRandomCharacters(
        characters,
        numberPossibleAnswersToDisplay
      ),
      indexOfCorrectAnswer: getRandomIndex(numberPossibleAnswersToDisplay)
    })
  }

  return (
    <MatchPronunciationRound
      indexOfCorrectAnswer={state.indexOfCorrectAnswer}
      possibleAnswers={state.possibleAnswers}
      resetRound={resetRound}
    />
  )
}
