import React from "react"
import characters from "../../assets/characters"
import { playPronunciation } from "../../helpers/index.js"
import { TileButton } from "../../molecules/TileButton/TileButton"
import {
  getCharacterGridPosition,
  getSoundGridPosition
} from "./getGridPosition"
import sounds from "./sounds"

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

/**
 * A chart that organizes the hiragana characters according to the sound that
 * they start and end with.
 */
export const HiraganaChart = ({ orientation }) => {
  return (
    <div style={gridStyle[orientation]}>
      {sounds.map(sound => {
        const style = {
          gridArea: getSoundGridPosition(sound, orientation)
        }
        return (
          <span className="m-auto" key={sound} style={style}>
            {sound}
          </span>
        )
      })}
      {characters.map(character => {
        const style = {
          gridArea: getCharacterGridPosition(character, orientation)
        }
        return (
          <TileButton
            key={character}
            onClick={() => playPronunciation(character)}
            style={style}
          >
            {character}
          </TileButton>
        )
      })}
    </div>
  )
}
