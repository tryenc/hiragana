import React, { useState } from "react"
import { PossiblePronunciationAnswer } from "./PossiblePronunciationAnswer"

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
  const setGuessed = value => {
    _setGuessed([value, ...guessed])
  }
  const value = "あ"
  const correctAnswer = "あ"

  return (
    <PossiblePronunciationAnswer
      isCorrect={computeIsCorrect(correctAnswer, guessed, value)}
      setGuessed={setGuessed}
      value={value}
    />
  )
}

export const IncorrectExample = () => {
  const [guessed, _setGuessed] = useState([])
  const setGuessed = value => {
    _setGuessed([value, ...guessed])
  }
  const value = "と"
  const correctAnswer = "あ"

  return (
    <PossiblePronunciationAnswer
      isCorrect={computeIsCorrect(correctAnswer, guessed, value)}
      setGuessed={setGuessed}
      value={value}
    />
  )
}
