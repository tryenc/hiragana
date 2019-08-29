import re from "../audio/re.mp3"
import me from "../audio/me.mp3"
import he from "../audio/he.mp3"
import ne from "../audio/ne.mp3"
import te from "../audio/te.mp3"
import se from "../audio/se.mp3"
import ke from "../audio/ke.mp3"
import e from "../audio/e.mp3"

const rowIndex = 5

export const rowE = [
  {
    audioPath: re,
    character: "れ",
    gridPosition: { gridArea: `${rowIndex} / 3` }
  },
  {
    audioPath: me,
    character: "め",
    gridPosition: { gridArea: `${rowIndex} / 5` }
  },
  {
    audioPath: he,
    character: "へ",
    gridPosition: { gridArea: `${rowIndex} / 6` }
  },
  {
    audioPath: ne,
    character: "ね",
    gridPosition: { gridArea: `${rowIndex} / 7` }
  },
  {
    audioPath: te,
    character: "て",
    gridPosition: { gridArea: `${rowIndex} / 8` }
  },
  {
    audioPath: se,
    character: "せ",
    gridPosition: { gridArea: `${rowIndex} / 9` }
  },
  {
    audioPath: ke,
    character: "け",
    gridPosition: { gridArea: `${rowIndex} / 10` }
  },
  {
    audioPath: e,
    character: "え",
    gridPosition: { gridArea: `${rowIndex} / 11` }
  }
]
