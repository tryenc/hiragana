import ru from "../audio/ru.mp3"
import yu from "../audio/yu.mp3"
import mu from "../audio/mu.mp3"
import fu from "../audio/fu.mp3"
import nu from "../audio/nu.mp3"
import tsu from "../audio/tsu.mp3"
import su from "../audio/su.mp3"
import ku from "../audio/ku.mp3"
import u from "../audio/u.mp3"

const index = 4

export const rowU = [
  {
    audioPath: ru,
    character: "る",
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
    audioPath: yu,
    character: "ゆ",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 4`
      },
      "portrait-primary": {
        gridArea: `9 / ${index}`
      }
    }
  },
  {
    audioPath: mu,
    character: "む",
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
    audioPath: fu,
    character: "ふ",
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
    audioPath: nu,
    character: "ぬ",
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
    audioPath: tsu,
    character: "つ",
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
    audioPath: su,
    character: "す",
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
    audioPath: ku,
    character: "く",
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
    audioPath: u,
    character: "う",
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
