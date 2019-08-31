import React, { useState } from "react"
import { Character } from "./Character"
import { characters } from "./row-configs/index"
import { withGuessingBehavior } from "./HOCs/withGuessingBehavior"

const gridStyle = {
  "landscape-primary": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr"
  },
  "portrait-primary": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr"
  }
}

const soundStyle = {
  gridPosition: {
    "landscape-primary": {
      gridArea: `1 / 2`
    },
    "portrait-primary": {
      gridArea: `1 / 2`
    }
  }
}

const guessStyle = [
  {
    gridPosition: {
      "landscape-primary": {
        gridArea: `2 / 1`
      },
      "portrait-primary": {
        gridArea: `2 / 1`
      }
    }
  },
  {
    gridPosition: {
      "landscape-primary": {
        gridArea: `2 / 2`
      },
      "portrait-primary": {
        gridArea: `2 / 2`
      }
    }
  },
  {
    gridPosition: {
      "landscape-primary": {
        gridArea: `2 / 3`
      },
      "portrait-primary": {
        gridArea: `2 / 3`
      }
    }
  },
  {
    gridPosition: {
      "landscape-primary": {
        gridArea: `3 / 1`
      },
      "portrait-primary": {
        gridArea: `3 / 1`
      }
    }
  },
  {
    gridPosition: {
      "landscape-primary": {
        gridArea: `3 / 2`
      },
      "portrait-primary": {
        gridArea: `3 / 2`
      }
    }
  },
  {
    gridPosition: {
      "landscape-primary": {
        gridArea: `3 / 3`
      },
      "portrait-primary": {
        gridArea: `3 / 3`
      }
    }
  }
]

const sixCharacters = characters.slice(0, 6)
const soundCharacter = sixCharacters[0]

const Guess = withGuessingBehavior(Character)

export function MatchSoundToCharacter({ orientation }) {
  const [guessed, setGuessed] = useState([])
  function computeIsCorrect(guessed, guess) {
    if (
      guessed.includes(guess.character) &&
      guess.character === soundCharacter.character
    ) {
      return true
    }
    if (
      guessed.includes(guess.character) &&
      guess.character !== soundCharacter.character
    ) {
      return false
    }
  }

  function handleClick(event) {
    setGuessed([event.target.value, ...guessed])
  }

  return (
    <div className="h-screen" style={gridStyle[orientation]}>
      <Character
        audioPath={soundCharacter.audioPath}
        character={soundCharacter.character}
        soundOnly={true}
        style={soundStyle.gridPosition[orientation]}
      />
      {sixCharacters.map((letter, index) => {
        return (
          <Guess
            audioPath={letter.audioPath}
            character={letter.character}
            isCorrect={computeIsCorrect(guessed, letter)}
            key={letter.character}
            onClick={handleClick}
            style={guessStyle[index].gridPosition[orientation]}
          />
        )
      })}
    </div>
  )
}
