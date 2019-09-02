import React, { useState } from "react"
import { PossibleCharacterAnswer } from "./PossibleCharacterAnswer"

function computeIsCorrect(correctAnswer, guessed, value) {
  if (guessed.includes(value)) {
    if (value === correctAnswer) {
      return true
    }
    return false
  }
}

export const CorrectExample = () => {
  const [guessed, _setGuessed] = useState([])
  function setGuessed(e) {
    _setGuessed([e.target.value, ...guessed])
  }
  const value = "あ"
  const correctAnswer = "あ"

  return (
    <PossibleCharacterAnswer
      isCorrect={computeIsCorrect(correctAnswer, guessed, value)}
      setGuessed={setGuessed}
      value={value}
    />
  )
}

export const IncorrectExample = () => {
  const [guessed, _setGuessed] = useState([])
  function setGuessed(e) {
    _setGuessed([e.target.value, ...guessed])
  }
  const value = "A"
  const correctAnswer = "B"

  return (
    <PossibleCharacterAnswer
      isCorrect={computeIsCorrect(correctAnswer, guessed, value)}
      setGuessed={setGuessed}
      value={value}
    />
  )
}
