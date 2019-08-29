import React from "react"
import { Character } from "./Character"
import { characters, firstSound, lastSound } from "./row-configs/index"

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr"
}

export function Table() {
  return (
    <div className="h-screen" style={gridStyle}>
      {firstSound.map(letter => (
        <div key={letter.character} style={letter.gridPosition}>
          {letter.character}
        </div>
      ))}
      {characters.map(letter => (
        <Character
          key={letter.character}
          audioPath={letter.audioPath}
          character={letter.character}
          style={letter.gridPosition}
        />
      ))}
      {lastSound.map(letter => (
        <div key={letter.character} style={letter.gridPosition}>
          {letter.character}
        </div>
      ))}
    </div>
  )
}
