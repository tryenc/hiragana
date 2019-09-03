import React from "react"
import classnames from "classnames"

const buttonClasses =
  "m-2 bg-white text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow-md focus:outline-none"

export const Button = ({
  children,
  className: parentClassName,
  onClick = () => {},
  onDoubleClick = () => {},
  value,
  style: parentStyle
}) => {
  /**
   * A `dblclick` event occurs after two `click` events.
   */
  let timeoutRefArr = []

  function handleClick(e) {
    const timeoutRef = setTimeout(() => {
      onClick(e)
      timeoutRefArr = []
    }, 250)
    timeoutRefArr.push(timeoutRef)
  }

  function handleDoubleClick(e) {
    timeoutRefArr.forEach(timeoutRef => clearTimeout(timeoutRef))
    onDoubleClick(e)
  }
  return (
    <button
      className={classnames(buttonClasses, parentClassName)}
      style={parentStyle}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      value={value}
    >
      {children}
    </button>
  )
}
