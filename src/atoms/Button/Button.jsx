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
  return (
    <button
      className={classnames(buttonClasses, parentClassName)}
      style={parentStyle}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      value={value}
    >
      {children}
    </button>
  )
}
