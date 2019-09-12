import React from "react"
import classnames from "classnames"

const tileClasses =
  "m-2 bg-white py-2 px-2 border border-gray-400 rounded shadow-md inline-block text-center"

/**
 * A styled HTML `span` with a `display` of `inline-block`.
 */
export const Tile = ({
  children,
  className: parentClassName,
  style: parentStyle
}) => {
  return (
    <span
      style={parentStyle}
      className={classnames(tileClasses, parentClassName)}
    >
      {children}
    </span>
  )
}
