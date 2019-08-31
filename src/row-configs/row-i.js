import ri from "../audio/ri.mp3"
import mi from "../audio/mi.mp3"
import hi from "../audio/hi.mp3"
import ni from "../audio/ni.mp3"
import chi from "../audio/chi.mp3"
import shi from "../audio/shi.mp3"
import ki from "../audio/ki.mp3"
import i from "../audio/i.mp3"

const index = 3

export const rowI = [
  {
    audioPath: ri,
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
    audioPath: mi,
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
    audioPath: hi,
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
    audioPath: ni,
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
    audioPath: chi,
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
    audioPath: shi,
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
    audioPath: ki,
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
    audioPath: i,
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
