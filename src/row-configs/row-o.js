import o from "../audio/o.mp3"
import ro from "../audio/ro.mp3"
import yo from "../audio/yo.mp3"
import mo from "../audio/mo.mp3"
import ho from "../audio/ho.mp3"
import no from "../audio/no.mp3"
import to from "../audio/to.mp3"
import so from "../audio/so.mp3"
import ko from "../audio/ko.mp3"
import wo from "../audio/wo.mp3"

const rowIndex = 6

export const rowO = [
  {
    audioPath: wo,
    character: "を",
    gridPosition: { gridArea: `${rowIndex} / 2` }
  },
  {
    audioPath: ro,
    character: "ろ",
    gridPosition: { gridArea: `${rowIndex} / 3` }
  },
  {
    audioPath: yo,
    character: "よ",
    gridPosition: { gridArea: `${rowIndex} / 4` }
  },
  {
    audioPath: mo,
    character: "も",
    gridPosition: { gridArea: `${rowIndex} / 5` }
  },
  {
    audioPath: ho,
    character: "ほ",
    gridPosition: { gridArea: `${rowIndex} / 6` }
  },
  {
    audioPath: no,
    character: "の",
    gridPosition: { gridArea: `${rowIndex} / 7` }
  },
  {
    audioPath: to,
    character: "と",
    gridPosition: { gridArea: `${rowIndex} / 8` }
  },
  {
    audioPath: so,
    character: "そ",
    gridPosition: { gridArea: `${rowIndex} / 9` }
  },
  {
    audioPath: ko,
    character: "こ",
    gridPosition: { gridArea: `${rowIndex} / 10` }
  },
  {
    audioPath: o,
    character: "お",
    gridPosition: { gridArea: `${rowIndex} / 11` }
  }
]
