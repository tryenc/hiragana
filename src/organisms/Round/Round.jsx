import React, { useEffect, useState } from "react"
import {
  computeWasCorrectlyGuessed,
  playCorrect,
  playIncorrect,
  playPronunciation
} from "../../helpers"

/**
 * This component represent a single "round" of the guessing game.
 * The user is presented with an audio clip of the pronunciation of a
 * hiragana character. The user must select the character that
 * corresponds to the pronunciation.
 */
export const Round = ({
  markCorrect = () => {},
  markIncorrect = () => {},
  possibleAnswers = [],
  renderPossibleTileAnswer = () => {},
  renderTileToMatch = () => {}
}) => {
  const [guessedValues, _setGuessedValues] = useState([])
  const correctAnswer = possibleAnswers.find(
    possibleAnswer => possibleAnswer.isCorrect
  )

  /**
   * Resets the `guessedValues` whenever a new round begins. In other words, the prop,
   * `possibleAnswers`, has been updated by the parent component.
   */
  useEffect(() => {
    _setGuessedValues([])
  }, [possibleAnswers])

  /**
   * Handles when a guess is made by updating the `guessedValues` and
   * calling either `handleCorrect` or `handleIncorrect` based on the
   * accuracy of the guess.
   */
  const handleGuess = character => {
    setGuessedValues(character)
    if (character === correctAnswer.character) {
      handleCorrect(character)
    } else {
      handleIncorrect(character)
    }
  }

  const handleCorrect = character => {
    playCorrect()
      .then(() => playPronunciation(character))
      .then(() => markCorrect())
  }

  const handleIncorrect = character => {
    playIncorrect()
      .then(() => playPronunciation(character))
      .then(() => markIncorrect())
  }

  /**
   * Updates the collection of values that have already been guessed
   * by adding the latest guess.
   * @param {string} value
   */
  const setGuessedValues = value => {
    _setGuessedValues([value, ...guessedValues])
  }

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-grow flex justify-center">
        {renderTileToMatch({
          character: correctAnswer.character,
          handleClick: () => playPronunciation(correctAnswer.character)
        })}
      </div>
      <div className="flex-grow flex flex-wrap justify-around">
        {possibleAnswers.map(({ character }) =>
          renderPossibleTileAnswer({
            character,
            handleGuess: () => handleGuess(character),
            playPronunciation: () => playPronunciation(character),
            wasCorrectlyGuessed: computeWasCorrectlyGuessed(
              correctAnswer.character,
              guessedValues,
              character
            )
          })
        )}
      </div>
    </div>
  )
}
