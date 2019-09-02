import React, { useEffect } from "react"
import { Button } from "../../atoms/Button/Button"
import correct from "../../assets/sfx/correct.wav"
import incorrect from "../../assets/sfx/incorrect.wav"
import * as pronunciations from "../../assets/pronunciation/index"

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
  const valueAudioPath = pronunciations[value]

  useEffect(() => {
    if (isCorrect === true) {
      play(correct).then(() => play(valueAudioPath))
    } else if (isCorrect === false) {
      play(incorrect).then(() => play(valueAudioPath))
    }
  }, [isCorrect, valueAudioPath])

  function handleClick(e) {
    if (isCorrect === undefined) {
      setGuessed(e)
    } else {
      play(valueAudioPath)
    }
    parentOnClick(e)
  }

  function play(audioPath) {
    const pronunciation = new Audio(audioPath)
    return new Promise(resolve => {
      pronunciation.addEventListener("ended", () => {
        console.log("ended")
        resolve()
      })
      pronunciation.play()
    })
  }

  return (
    <Button className={guessedClasses} onClick={handleClick} value={value}>
      {value}
    </Button>
  )
}
