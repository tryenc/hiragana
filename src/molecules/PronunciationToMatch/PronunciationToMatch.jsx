import React, { useEffect } from "react"

import { TileButton } from "../../molecules/TileButton/TileButton"
import { playAudio } from "../../js/helpers"
import * as pronunciations from "../../assets/pronunciation/index"

export const PronunciationToMatch = ({ className: parentClassName, value }) => {
  const valueAudioPath = pronunciations[value]

  /**
   * Play the pronunciation when the component first loads
   */
  useEffect(() => {
    playAudio(valueAudioPath)
  }, [value, valueAudioPath])

  function handleClick(e) {
    playAudio(valueAudioPath)
  }

  return (
    <TileButton className={parentClassName} onClick={handleClick}>
      Play
    </TileButton>
  )
}
