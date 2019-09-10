import React, { useEffect, useState } from "react"
import classnames from "classnames"
import { TileButton } from "../../molecules/TileButton/TileButton"
import { playAudio, playCorrect, playIncorrect } from "../../js/helpers"
import * as pronunciations from "../../assets/pronunciation/index"

/**
 * This component represent a single "round" of the guessing game.
 * The user is presented with an audio clip of the pronunciation of a
 * hiragana character. The user must select the character that
 * corresponds to the pronunciation.
 */
export const FindMatchingCharacterRound = ({
  possibleAnswers = [],
  reset = () => {}
}) => {
  const [guessedValues, _setGuessedValues] = useState([])
  const correctAnswer = possibleAnswers.find(
    possibleAnswer => possibleAnswer.isCorrect
  )

  /**
   * Resets the `guessedValues` whenever a new round begins (i.e. `possibleAnswers` has been updated).
   */
  useEffect(() => {
    _setGuessedValues([])
  }, [possibleAnswers])

  /**
   * Determines if a character was guessed and, if so, if it's the
   * correct answer. It returns classes accordingly.
   * @param {string} correctAnswerCharacter
   * @param {string[]} guessedValues
   * @param {string} character
   */
  function computeGuessedClasses(
    correctAnswerCharacter,
    guessedValues,
    character
  ) {
    if (guessedValues.includes(character)) {
      if (character === correctAnswerCharacter) {
        return "text-white bg-green-500"
      }
      return "text-white bg-red-600"
    }
  }

  /**
   * Handles when a guess is made by taking the following actions
   * 1. updates the `guessedValues`
   * 2. plays the sound effect for a correct or incorrect answer,
   * based on the accuracy of the guess.
   * 3. plays the audio for the character's pronunciation
   * 4. if the guess was correct, it resets the round
   */
  const handleGuess = character => {
    setGuessedValues(character)
    if (character === correctAnswer.character) {
      playCorrect()
        .then(() => playPronunciation(character))
        .then(() => reset())
    } else {
      playIncorrect().then(() => playPronunciation(character))
    }
  }

  /**
   * Plays the pronunciation of a character.
   */
  const playPronunciation = character => {
    const pronunciation = pronunciations[character]

    return playAudio(pronunciation)
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
        {/* Plays the pronunciation that the user must match */}
        <TileButton
          className="flex-grow"
          onClick={() => playPronunciation(correctAnswer.character)}
          value={correctAnswer.character}
        >
          Play
        </TileButton>
      </div>
      <div className="flex-grow flex justify-around">
        {possibleAnswers.map(({ character }) => {
          return (
            /** Possible matching characters */
            <TileButton
              className={classnames(
                "flex-grow",
                computeGuessedClasses(
                  correctAnswer.character,
                  guessedValues,
                  character
                )
              )}
              key={character}
              onClick={() => {
                handleGuess(character)
              }}
            >
              {character}
            </TileButton>
          )
        })}
      </div>
    </div>
  )
}
