import ri from "../audio/ri.mp3"
import mi from "../audio/mi.mp3"
import hi from "../audio/hi.mp3"
import ni from "../audio/ni.mp3"
import chi from "../audio/chi.mp3"
import shi from "../audio/shi.mp3"
import ki from "../audio/ki.mp3"
import i from "../audio/i.mp3"

const rowIndex = 3

export const rowI = [
  {
    audioPath: ri,
    character: "り",
    gridPosition: { gridArea: `${rowIndex} / 3` }
  },
  {
    audioPath: mi,
    character: "み",
    gridPosition: { gridArea: `${rowIndex} / 5` }
  },
  {
    audioPath: hi,
    character: "ひ",
    gridPosition: { gridArea: `${rowIndex} / 6` }
  },
  {
    audioPath: ni,
    character: "に",
    gridPosition: { gridArea: `${rowIndex} / 7` }
  },
  {
    audioPath: chi,
    character: "ち",
    gridPosition: { gridArea: `${rowIndex} / 8` }
  },
  {
    audioPath: shi,
    character: "し",
    gridPosition: { gridArea: `${rowIndex} / 9` }
  },
  {
    audioPath: ki,
    character: "き",
    gridPosition: { gridArea: `${rowIndex} / 10` }
  },
  {
    audioPath: i,
    character: "い",
    gridPosition: { gridArea: `${rowIndex} / 11` }
  }
]
