import React, { useEffect } from "react"
import { Button } from "../../atoms/Button/Button"
import { playAudio } from "../../js/playAudio"
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

export const PossiblePronunciationAnswer = ({
  isCorrect,
  setGuessed,
  value
}) => {
  const guessedClasses = computeGuessedClasses(isCorrect)
  const valueAudioPath = pronunciations[value]

  useEffect(() => {
    if (isCorrect === true) {
      playAudio(correct)
    } else if (isCorrect === false) {
      playAudio(incorrect)
    }
  }, [isCorrect, valueAudioPath])

  function handleClick(e) {
    playAudio(valueAudioPath)
  }

  function handleDoubleClick(e) {
    if (isCorrect === undefined) {
      setGuessed(e)
    }
  }

  return (
    <Button
      className={guessedClasses}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      value={value}
    >
      {isCorrect === true || isCorrect === false ? value : "Play"}
    </Button>
  )
}
