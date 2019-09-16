import React from "react"
import classnames from "classnames"

const tileClasses =
  "m-2 bg-white py-2 px-2 border border-gray-400 rounded shadow-md flex justify-center items-center"

/**
 * A styled HTML `span` with a `display` of `inline-block`.
 */
export const Tile = ({
  children,
  className: parentClassName,
  style: parentStyle
}) => {
  return (
    <div
      style={parentStyle}
      className={classnames(tileClasses, parentClassName)}
    >
      {children}
    </div>
  )
}
