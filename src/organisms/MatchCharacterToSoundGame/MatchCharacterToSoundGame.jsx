import React, { useState } from "react"
import characters from "../../assets/characters"
import { Round } from "../MatchSoundToCharacterRound/MatchSoundToCharacterRound"

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

export const MatchCharacterToSoundGame = () => {
  const numAnswersToDisplay = 4
  const [possibleAnswers, setPossibleAnswers] = useState(
    createPossibleAnswers(characters, numAnswersToDisplay)
  )
  const reset = () => {
    setPossibleAnswers(createPossibleAnswers(characters, numAnswersToDisplay))
  }

  return <Round possibleAnswers={possibleAnswers} reset={reset} />
}
