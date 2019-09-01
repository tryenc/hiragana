import re from "../audio/re.mp3"
import me from "../audio/me.mp3"
import he from "../audio/he.mp3"
import ne from "../audio/ne.mp3"
import te from "../audio/te.mp3"
import se from "../audio/se.mp3"
import ke from "../audio/ke.mp3"
import e from "../audio/e.mp3"

const index = 5

export const rowE = [
  {
    audioPath: re,
    character: "れ",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 3` },
      "portrait-primary": {
        gridArea: `10 / ${index}`
      }
    }
  },
  {
    audioPath: me,
    character: "め",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 5` },
      "portrait-primary": {
        gridArea: `8 / ${index}`
      }
    }
  },
  {
    audioPath: he,
    character: "へ",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 6` },
      "portrait-primary": {
        gridArea: `7 / ${index}`
      }
    }
  },
  {
    audioPath: ne,
    character: "ね",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 7` },
      "portrait-primary": {
        gridArea: `6 / ${index}`
      }
    }
  },
  {
    audioPath: te,
    character: "て",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 8` },
      "portrait-primary": {
        gridArea: `5 / ${index}`
      }
    }
  },
  {
    audioPath: se,
    character: "せ",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 9` },
      "portrait-primary": {
        gridArea: `4 / ${index}`
      }
    }
  },
  {
    audioPath: ke,
    character: "け",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 10` },
      "portrait-primary": {
        gridArea: `3 / ${index}`
      }
    }
  },
  {
    audioPath: e,
    character: "え",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 11` },
      "portrait-primary": {
        gridArea: `2 / ${index}`
      }
    }
  }
]
