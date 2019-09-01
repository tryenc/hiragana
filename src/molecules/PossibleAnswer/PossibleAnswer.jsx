import React from "react"
import { Button } from "../../atoms/Button/Button"

const correctClasses = "text-white bg-green-500"
const incorrectClasses = "text-white bg-red-600"

function computeGuessedClasses(correctAnswer, guessed, value) {
  if (guessed.includes(value)) {
    if (value === correctAnswer) {
      return correctClasses
    }
    return incorrectClasses
  }
}

export const PossibleAnswer = ({
  correctAnswer,
  guessed,
  setGuessed,
  value
}) => {
  const guessedClasses = computeGuessedClasses(correctAnswer, guessed, value)

  return (
    <Button className={guessedClasses} onClick={setGuessed} value={value}>
      {value}
    </Button>
  )
}
