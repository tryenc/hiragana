import React, { useState } from "react"
import { PossibleCharacterAnswer } from "../../molecules/PossibleCharacterAnswer/PossibleCharacterAnswer"
import { PronunciationToMatch } from "../../molecules/PronunciationToMatch/PronunciationToMatch"
import { computeIsCorrect } from "../../js/helpers"

/**
 * This component represent a single "round" of the guessing game.
 */
export const MatchPronunciationRound = ({
  indexOfCorrectAnswer,
  possibleAnswers,
  resetRound = () => {}
}) => {
  const [guessedValues, _setGuessedValues] = useState([])

  /**
   * Updates the collection of values that have already been guessed
   * by adding the latest guess.
   * @param {string} value
   */
  const setGuessedValues = value => {
    _setGuessedValues([value, ...guessedValues])
  }

  const resetGuessedValues = () => {
    _setGuessedValues([])
    resetRound()
  }

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-grow flex justify-center">
        <PronunciationToMatch
          className="flex-grow"
          value={possibleAnswers[indexOfCorrectAnswer]}
        />
      </div>
      <div className="flex-grow flex justify-around">
        {possibleAnswers.map(character => {
          return (
            <PossibleCharacterAnswer
              className="flex-grow"
              isCorrect={computeIsCorrect(
                possibleAnswers[indexOfCorrectAnswer],
                guessedValues,
                character
              )}
              key={character}
              setGuessed={setGuessedValues}
              value={character}
              resetGuessedValues={resetGuessedValues}
            />
          )
        })}
      </div>
    </div>
  )
}
