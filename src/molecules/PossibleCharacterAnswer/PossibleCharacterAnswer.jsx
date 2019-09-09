import React, { useEffect } from "react"
import classnames from "classnames"

import { TileButton } from "../../molecules/TileButton/TileButton"
import { playAudio } from "../../js/helpers"
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
  className: parentClassName,
  isCorrect,
  resetGuessedValues = () => {},
  setGuessed = () => {},
  value
}) => {
  const guessedClasses = computeGuessedClasses(isCorrect)
  const valueAudioPath = pronunciations[value]

  useEffect(() => {
    if (isCorrect === true) {
      playAudio(correct)
        .then(() => {
          return playAudio(valueAudioPath)
        })
        .then(() => {
          resetGuessedValues()
        })
    } else if (isCorrect === false) {
      playAudio(incorrect).then(() => playAudio(valueAudioPath))
    }
  }, [isCorrect, resetGuessedValues, valueAudioPath])

  const handleClick = () => {
    /**
     * If not previously guessed, add it to the collection of guessed.
     * If it's already been guessed and it's been marked as correct
     * or incorrect, we still want the ability to play the sound.
     */
    if (isCorrect === undefined) {
      setGuessed(value)
    } else {
      playAudio(valueAudioPath)
    }
  }

  return (
    <TileButton
      className={classnames(parentClassName, guessedClasses)}
      onClick={handleClick}
      value={value}
    >
      {value}
    </TileButton>
  )
}
