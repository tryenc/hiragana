import React from "react"
import { Character } from "./Character"
import { characters, firstSound, lastSound } from "./row-configs/index"

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

export function Table({ orientation }) {
  return (
    <div className="h-full" style={gridStyle[orientation]}>
      {firstSound.map(letter => (
        <div
          className="flex items-center justify-center"
          key={letter.character}
          style={letter.gridPosition[orientation]}
        >
          {letter.character}
        </div>
      ))}
      {characters.map(letter => (
        <Character
          key={letter.character}
          audioPath={letter.audioPath}
          character={letter.character}
          style={letter.gridPosition[orientation]}
        />
      ))}
      {lastSound.map(letter => (
        <div
          className="flex items-center justify-center"
          key={letter.character}
          style={letter.gridPosition[orientation]}
        >
          {letter.character}
        </div>
      ))}
    </div>
  )
}
