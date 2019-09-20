import React from "react"
import classnames from "classnames"
import { getGuessedClasses } from "../../helpers"
import { TileButton } from "../../molecules/TileButton/TileButton"
import { Tile } from "../../atoms/Tile/Tile"

export const PronunciationToMatch = ({ character, handleClick = () => {} }) => {
  return (
    <TileButton className="w-1/6" onClick={handleClick} value={character}>
      Play
    </TileButton>
  )
}

export const PossibleCharacterAnswer = ({
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

export const CharacterToMatch = ({ character }) => (
  <Tile className="w-1/6">{character}</Tile>
)

export const PossiblePronunciationAnswer = ({
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

export const possibleAnswers = [
  {
    character: "お",
    isCorrect: false
  },
  {
    character: "ろ",
    isCorrect: false
  },
  {
    character: "よ",
    isCorrect: true
  },
  {
    character: "も",
    isCorrect: false
  },
  {
    character: "ほ",
    isCorrect: false
  },
  {
    character: "の",
    isCorrect: false
  }
]
