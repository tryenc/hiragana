import React, { useEffect, useState } from "react"
import classnames from "classnames"
import { TileButton } from "../../molecules/TileButton/TileButton"
import {
  computeWasCorrectlyGuessed,
  getGuessedClasses,
  playCorrect,
  playIncorrect,
  playPronunciation
} from "../../helpers"

/**
 * A character that is possibly the correct answer.
 */
const PossibleCharacterAnswer = ({
  character,
  handleClick = () => {},
  wasCorrectlyGuessed
}) => {
  let guessedClasses = getGuessedClasses(wasCorrectlyGuessed)

  return (
    <TileButton
      className={classnames("w-1/6", guessedClasses)}
      onClick={handleClick}
    >
      {character}
    </TileButton>
  )
}

/**
 * The pronunciation whose character you have to match.
 */
const PronunciationToMatch = ({ character, handleClick = () => {} }) => {
  return (
    <TileButton className="w-1/6" onClick={handleClick} value={character}>
      Play
    </TileButton>
  )
}

/**
 * This component represent a single "round" of the guessing game.
 * The user is presented with an audio clip of the pronunciation of a
 * hiragana character. The user must select the character that
 * corresponds to the pronunciation.
 */
export const FindMatchingCharacter = ({
  possibleAnswers = [],
  reset = () => {}
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
        <PronunciationToMatch
          character={correctAnswer.character}
          handleClick={() => playPronunciation(correctAnswer.character)}
        />
      </div>
      <div className="flex-grow flex flex-wrap justify-around">
        {possibleAnswers.map(({ character }) => {
          return (
            <PossibleCharacterAnswer
              character={character}
              handleClick={() => handleGuess(character)}
              key={character}
              wasCorrectlyGuessed={computeWasCorrectlyGuessed(
                correctAnswer.character,
                guessedValues,
                character
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
