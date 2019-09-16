import pronunciation from "./pronunciations"
import soundGridPosition from "./soundGridPosition"

/**
 * Returns a string containing the row and column where the
 * character should be positioned in the grid. This value will be
 * used for the CSS property `grid-area`.
 * @param {string} character a hiragana character
 * @param {string} orientation the orientation of the device, either 'portrait' or 'landscape'
 */
export function getCharacterGridPosition(character, orientation) {
  const { startsWith, endsWith } = pronunciation[character]
  let row, column

  if (orientation === "landscape-primary") {
    row = soundGridPosition[endsWith][orientation].row
    column = soundGridPosition[startsWith][orientation].column
  } else {
    row = soundGridPosition[startsWith][orientation].row
    column = soundGridPosition[endsWith][orientation].column
  }

  return `${row} / ${column}`
}

export function getSoundGridPosition(sound, orientation) {
  const { row, column } = soundGridPosition[sound][orientation]

  return `${row} / ${column}`
}
