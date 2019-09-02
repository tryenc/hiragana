import り from "../assets/pronunciation/り.mp3"
import み from "../assets/pronunciation/み.mp3"
import ひ from "../assets/pronunciation/ひ.mp3"
import に from "../assets/pronunciation/に.mp3"
import ち from "../assets/pronunciation/ち.mp3"
import し from "../assets/pronunciation/し.mp3"
import き from "../assets/pronunciation/き.mp3"
import い from "../assets/pronunciation/い.mp3"

const index = 3

export const rowI = [
  {
    audioPath: り,
    character: "り",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 3`
      },
      "portrait-primary": {
        gridArea: `10 / ${index}`
      }
    }
  },
  {
    audioPath: み,
    character: "み",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 5`
      },
      "portrait-primary": {
        gridArea: `8 / ${index}`
      }
    }
  },
  {
    audioPath: ひ,
    character: "ひ",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 6`
      },
      "portrait-primary": {
        gridArea: `7 / ${index}`
      }
    }
  },
  {
    audioPath: に,
    character: "に",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 7`
      },
      "portrait-primary": {
        gridArea: `6 / ${index}`
      }
    }
  },
  {
    audioPath: ち,
    character: "ち",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 8`
      },
      "portrait-primary": {
        gridArea: `5 / ${index}`
      }
    }
  },
  {
    audioPath: し,
    character: "し",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 9`
      },
      "portrait-primary": {
        gridArea: `4 / ${index}`
      }
    }
  },
  {
    audioPath: き,
    character: "き",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 10`
      },
      "portrait-primary": {
        gridArea: `3 / ${index}`
      }
    }
  },
  {
    audioPath: い,
    character: "い",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 11`
      },
      "portrait-primary": {
        gridArea: `2 / ${index}`
      }
    }
  }
]
