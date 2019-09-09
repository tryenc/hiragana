import React from "react"
import classnames from "classnames"

const tileClasses =
  "m-2 bg-white py-2 px-2 border border-gray-400 rounded shadow-md inline-block"

export const Tile = ({ children, className: parentClassName }) => {
  return (
    <span className={classnames(tileClasses, parentClassName)}>{children}</span>
  )
}
