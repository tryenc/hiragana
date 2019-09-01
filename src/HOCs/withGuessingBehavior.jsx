import React from "react"

import { wrapDisplayName } from "./wrapDisplayName"

const correctClasses = "text-white bg-green-500"
const incorrectClasses = "text-white bg-red-600"

function computeClasses(isCorrect) {
  if (isCorrect === true) {
    return correctClasses
  }
  if (isCorrect === false) {
    return incorrectClasses
  }
}

export const withGuessingBehavior = Component => {
  const WithGuessingBehavior = props => {
    const { isCorrect } = props
    const classes = computeClasses(isCorrect)

    return <Component className={classes} {...props} />
  }

  return wrapDisplayName(Component, WithGuessingBehavior)
}
