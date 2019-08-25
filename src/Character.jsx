import React from "react"

export const Character = ({ audioPath, character }) => {
  const pronunciation = new Audio(audioPath)

  return <button onClick={() => pronunciation.play()}>{character}</button>
}
