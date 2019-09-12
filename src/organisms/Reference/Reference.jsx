import React from "react"
import characters from "../../assets/characters"
import { playAudio } from "../../js/helpers"
import * as pronunciations from "../../assets/pronunciation/index"
import { TileButton } from "../../molecules/TileButton/TileButton"
import getGridPosition from "./getGridPosition"

const gridStyle = {
  "landscape-primary": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr"
  },
  "portrait-primary": {
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"
  }
}

export const Reference = ({ orientation }) => {
  const handleClick = character => {
    const pronunciation = pronunciations[character]

    return playAudio(pronunciation)
  }
  return (
    <div style={gridStyle[orientation]}>
      {characters.map(character => {
        const style = {
          gridArea: getGridPosition(character, orientation)
        }
        return (
          <TileButton
            key={character}
            onClick={() => handleClick(character)}
            style={style}
          >
            {character}
          </TileButton>
        )
      })}
    </div>
  )
}
