import れ from "../assets/pronunciation/れ.mp3"
import め from "../assets/pronunciation/め.mp3"
import へ from "../assets/pronunciation/へ.mp3"
import ね from "../assets/pronunciation/ね.mp3"
import て from "../assets/pronunciation/て.mp3"
import せ from "../assets/pronunciation/せ.mp3"
import け from "../assets/pronunciation/け.mp3"
import え from "../assets/pronunciation/え.mp3"

const index = 5

export const rowE = [
  {
    audioPath: れ,
    character: "れ",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 3` },
      "portrait-primary": {
        gridArea: `10 / ${index}`
      }
    }
  },
  {
    audioPath: め,
    character: "め",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 5` },
      "portrait-primary": {
        gridArea: `8 / ${index}`
      }
    }
  },
  {
    audioPath: へ,
    character: "へ",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 6` },
      "portrait-primary": {
        gridArea: `7 / ${index}`
      }
    }
  },
  {
    audioPath: ね,
    character: "ね",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 7` },
      "portrait-primary": {
        gridArea: `6 / ${index}`
      }
    }
  },
  {
    audioPath: て,
    character: "て",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 8` },
      "portrait-primary": {
        gridArea: `5 / ${index}`
      }
    }
  },
  {
    audioPath: せ,
    character: "せ",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 9` },
      "portrait-primary": {
        gridArea: `4 / ${index}`
      }
    }
  },
  {
    audioPath: け,
    character: "け",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 10` },
      "portrait-primary": {
        gridArea: `3 / ${index}`
      }
    }
  },
  {
    audioPath: え,
    character: "え",
    gridPosition: {
      "landscape-primary": { gridArea: `${index} / 11` },
      "portrait-primary": {
        gridArea: `2 / ${index}`
      }
    }
  }
]
