export function playAudio(audioPath) {
  const pronunciation = new Audio(audioPath)
  return new Promise(resolve => {
    pronunciation.addEventListener("ended", () => {
      resolve()
    })
    pronunciation.play()
  })
}
