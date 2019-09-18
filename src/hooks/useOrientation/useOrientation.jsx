import { useEffect, useState } from "react"

export function useOrientation() {
  const [orientation, setOrientation] = useState(window.screen.orientation.type)

  useEffect(() => {
    function handleOrientationChange(e) {
      setOrientation(e.target.type)
    }
    // TODO: How best to remove this on unmount
    window.screen.orientation.addEventListener(
      "change",
      handleOrientationChange
    )
  })

  return orientation
}
