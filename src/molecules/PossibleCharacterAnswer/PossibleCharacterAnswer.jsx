import React, { useEffect } from "react"
import { TileButton } from "../../molecules/TileButton/TileButton"
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

export const PossibleCharacterAnswer = ({ isCorrect, setGuessed, value }) => {
  const guessedClasses = computeGuessedClasses(isCorrect)
  const valueAudioPath = pronunciations[value]

  useEffect(() => {
    if (isCorrect === true) {
      playAudio(correct).then(() => playAudio(valueAudioPath))
    } else if (isCorrect === false) {
      playAudio(incorrect).then(() => playAudio(valueAudioPath))
    }
  }, [isCorrect, valueAudioPath])

  const handleClick = () => {
    if (isCorrect === undefined) {
      setGuessed(value)
    } else {
      playAudio(valueAudioPath)
    }
  }

  return (
    <TileButton className={guessedClasses} onClick={handleClick} value={value}>
      {value}
    </TileButton>
  )
}
