import React from "react"
import { Tile } from "../../atoms/Tile/Tile"
import { Button } from "../../atoms/Button/Button"

export const TileButton = ({
  children,
  className: parentClassName,
  onClick = () => {},
  onDoubleClick = () => {},
  style: parentStyle,
  value
}) => {
  return (
    <Tile className={parentClassName} style={parentStyle}>
      <Button
        className="focus:outline-none font-semibold w-full h-full flex justify-center"
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        value={value}
      >
        {children}
      </Button>
    </Tile>
  )
}
