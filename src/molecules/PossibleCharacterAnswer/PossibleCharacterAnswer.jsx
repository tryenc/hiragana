import React, { useEffect } from "react"
import { Button } from "../../atoms/Button/Button"
import correct from "../../assets/sfx/correct.wav"
import incorrect from "../../assets/sfx/incorrect.wav"

const correctClasses = "text-white bg-green-500"
const incorrectClasses = "text-white bg-red-600"

function computeGuessedClasses(isCorrect) {
  if (isCorrect === true) {
    return correctClasses
  }
  if (isCorrect === false) {
    return incorrectClasses
  }
}

export const PossibleCharacterAnswer = ({
  isCorrect,
  onClick: parentOnClick = () => {},
  setGuessed,
  value
}) => {
  const guessedClasses = computeGuessedClasses(isCorrect)
  useEffect(() => {
    if (isCorrect === true) {
      play(correct)
    } else if (isCorrect === false) {
      play(incorrect)
    }
  }, [isCorrect])

  function handleClick(e) {
    console.log("isCorrect", isCorrect)
    if (isCorrect === undefined) {
      setGuessed(e)
    }
    parentOnClick(e)
  }

  function play(audioPath) {
    const pronunciation = new Audio(audioPath)
    pronunciation.play()
  }

  return (
    <Button className={guessedClasses} onClick={handleClick} value={value}>
      {value}
    </Button>
  )
}
