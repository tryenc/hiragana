import React, { useState } from "react"
import classnames from "classnames"

const buttonClasses =
  "m-2 bg-white text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow-md focus:outline-none"

export const Character = ({
  onClick: additionalClickHandlers = () => {},
  audioPath,
  character,
  className: parentClassName,
  style: parentStyle,
  soundOnly = false
}) => {
  const [playing, setPlaying] = useState(false)
  const pronunciation = new Audio(audioPath)

  function handleClick(e) {
    additionalClickHandlers(e)
    pronunciation.play()
    setPlaying(true)
  }

  pronunciation.addEventListener("ended", () => setPlaying(false), {
    once: true // listener removes itself after being invoked
  })

  return (
    <button
      className={classnames(
        buttonClasses,
        { "shadow-none bg-gray-200": playing /* simulates button pressed */ },
        parentClassName
      )}
      style={parentStyle}
      onClick={handleClick}
      value={character}
    >
      {soundOnly ? "Play" : character}
    </button>
  )
}
