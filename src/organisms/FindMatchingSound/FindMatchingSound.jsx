import React from "react"
import classnames from "classnames"
import { TileButton } from "../../molecules/TileButton/TileButton"
import { Tile } from "../../atoms/Tile/Tile"
import { Round } from "../Round/Round"
import { getGuessedClasses } from "../../helpers"

const CharacterToMatch = ({ character }) => (
  <Tile className="w-1/6">{character}</Tile>
)

const PossiblePronunciationAnswer = ({
  character,
  handleClick,
  handleDoubleClick,
  wasCorrectlyGuessed
}) => {
  let guessedClasses = getGuessedClasses(wasCorrectlyGuessed)

  return (
    <TileButton
      className={classnames("w-1/6", guessedClasses)}
      key={character}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {wasCorrectlyGuessed !== undefined ? character : "Play"}
    </TileButton>
  )
}

/**
 * This component represent a single "round" of the guessing game.
 * The user is presented with a hiragana character. The user must select
 * the pronunciation that matches that character.
 */
export const FindMatchingSound = ({
  markCorrect = () => {},
  markIncorrect = () => {},
  possibleAnswers = []
}) => {
  return (
    <Round
      markCorrect={markCorrect}
      markIncorrect={markIncorrect}
      possibleAnswers={possibleAnswers}
      renderTileToMatch={({ character }) => (
        <CharacterToMatch character={character} />
      )}
      renderPossibleTileAnswer={({
        character,
        handleGuess,
        playPronunciation,
        wasCorrectlyGuessed
      }) => (
        <PossiblePronunciationAnswer
          character={character}
          handleClick={playPronunciation}
          handleDoubleClick={handleGuess}
          wasCorrectlyGuessed={wasCorrectlyGuessed}
        />
      )}
    />
  )
}
