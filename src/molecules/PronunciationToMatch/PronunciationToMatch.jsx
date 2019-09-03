import React, { useEffect } from "react"
import { Button } from "../../atoms/Button/Button"
import { playAudio } from "../../js/playAudio"
import * as pronunciations from "../../assets/pronunciation/index"

export const PronunciationToMatch = ({ value }) => {
  const valueAudioPath = pronunciations[value]

  useEffect(() => {
    playAudio(valueAudioPath)
  }, [value, valueAudioPath])

  function handleClick(e) {
    playAudio(valueAudioPath)
  }

  return <Button onClick={handleClick}>Play</Button>
}
