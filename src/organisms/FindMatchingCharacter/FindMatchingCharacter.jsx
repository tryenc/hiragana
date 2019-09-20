import React from "react"
import classnames from "classnames"
import { TileButton } from "../../molecules/TileButton/TileButton"
import { Round } from "../Round/Round"
import { getGuessedClasses } from "../../helpers"

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
}) => (
  <Round
    possibleAnswers={possibleAnswers}
    renderTileToMatch={({ character, handleClick }) => (
      <PronunciationToMatch character={character} handleClick={handleClick} />
    )}
    renderPossibleTileAnswer={({
      character,
      handleGuess,
      wasCorrectlyGuessed
    }) => (
      <PossibleCharacterAnswer
        character={character}
        handleClick={handleGuess}
        wasCorrectlyGuessed={wasCorrectlyGuessed}
      />
    )}
    reset={reset}
  />
)
