import React, { useEffect, useState } from "react"
import classnames from "classnames"
import { TileButton } from "../../molecules/TileButton/TileButton"
import { Tile } from "../../atoms/Tile/Tile"
import { playCorrect, playIncorrect, playPronunciation } from "../../helpers"

/**
 * This component represent a single "round" of the guessing game.
 * The user is presented with a hiragana character. The user must select
 * the pronunciation that matches that character.
 */
export const FindMatchingSound = ({
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
        {/* The character whose pronunciation the user must match */}
        <Tile className="flex-grow">{correctAnswer.character}</Tile>
      </div>
      <div className="flex-grow flex justify-around">
        {possibleAnswers.map(({ character }) => {
          const wasGuessed = guessedValues.includes(character)
          return (
            /** Possible matching pronunciations */
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
              onClick={() => playPronunciation(character)}
              onDoubleClick={() => {
                handleGuess(character)
              }}
            >
              {wasGuessed ? character : "Play"}
            </TileButton>
          )
        })}
      </div>
    </div>
  )
}
