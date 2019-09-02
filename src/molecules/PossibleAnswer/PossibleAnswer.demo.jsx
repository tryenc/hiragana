import React, { useState } from "react"
import { PossibleAnswer } from "./PossibleAnswer"

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
  const value = "A"
  const correctAnswer = "A"

  return (
    <PossibleAnswer
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
    <PossibleAnswer
      isCorrect={computeIsCorrect(correctAnswer, guessed, value)}
      setGuessed={setGuessed}
      value={value}
    />
  )
}
