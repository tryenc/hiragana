import React, { useState } from "react"

import { wrapDisplayName } from "./wrapDisplayName"

export const withOrientation = Component => {
  const WithOrientation = props => {
    const [orientation, setOrientation] = useState(
      window.screen.orientation.type
    )
    window.screen.orientation.addEventListener("change", e => {
      setOrientation(e.target.type)
    })

    return <Component orientation={orientation} {...props} />
  }

  return wrapDisplayName(Component, WithOrientation)
}
