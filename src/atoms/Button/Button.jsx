import React from "react"

/**
 * A simple HTML button with the ability to handle a `dblclick`
 * event without having to react to a `click` event twice.
 */
export const Button = ({
  children,
  className: parentClassName,
  onClick = () => {},
  onDoubleClick = () => {},
  value
}) => {
  /**
   * A `dblclick` event occurs after two `click` events.
   */
  let timeoutRefArr = []

  const handleClick = e => {
    const timeoutRef = setTimeout(() => {
      onClick(e)
      timeoutRefArr = []
    }, 300)
    timeoutRefArr.push(timeoutRef)
  }

  const handleDoubleClick = e => {
    timeoutRefArr.forEach(timeoutRef => clearTimeout(timeoutRef))
    onDoubleClick(e)
  }
  return (
    <button
      className={parentClassName}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      value={value}
    >
      {children}
    </button>
  )
}
