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

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function getRandomCharacters(chars, qty) {
  const randomChars = []

  while (randomChars.length < qty) {
    const index = getRandomIndex(chars.length)

    const char = chars[index]

    if (!randomChars.includes(char)) {
      randomChars.push(char)
    }
  }

  return randomChars
}

const Guess = withGuessingBehavior(Character)

export function MatchSoundToCharacter({ orientation }) {
  const [guessedChars, setGuessedChars] = useState([])
  const [chars, setChars] = useState(getRandomCharacters(characters, 6))
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(
    getRandomIndex(6)
  )

  function computeIsCorrect(guessed, guess) {
    if (
      guessed.includes(guess) &&
      guess === chars[correctAnswerIndex].character
    ) {
      return true
    }
    if (
      guessed.includes(guess) &&
      guess !== chars[correctAnswerIndex].character
    ) {
      return false
    }
  }

  function handleClick(event) {
    setGuessedChars([event.target.value, ...guessedChars])
    if (event.target.value === chars[correctAnswerIndex].character) {
      setTimeout(() => {
        setGuessedChars([])
        setChars(getRandomCharacters(characters, 6))
        setCorrectAnswerIndex(getRandomIndex(6))
      }, 2000)
    }
  }

  return (
    <div className="h-full" style={gridStyle[orientation]}>
      <Character
        audioPath={chars[correctAnswerIndex].audioPath}
        character={chars[correctAnswerIndex].character}
        soundOnly={true}
        style={soundStyle.gridPosition[orientation]}
      />
      {chars.map((letter, index) => {
        return (
          <Guess
            audioPath={letter.audioPath}
            character={letter.character}
            isCorrect={computeIsCorrect(guessedChars, letter.character)}
            key={letter.character}
            onClick={handleClick}
            style={guessStyle[index].gridPosition[orientation]}
          />
        )
      })}
    </div>
  )
}
