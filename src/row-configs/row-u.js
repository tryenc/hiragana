import る from "../assets/pronunciation/る.mp3"
import ゆ from "../assets/pronunciation/ゆ.mp3"
import む from "../assets/pronunciation/む.mp3"
import ふ from "../assets/pronunciation/ふ.mp3"
import ぬ from "../assets/pronunciation/ぬ.mp3"
import つ from "../assets/pronunciation/つ.mp3"
import す from "../assets/pronunciation/す.mp3"
import く from "../assets/pronunciation/く.mp3"
import う from "../assets/pronunciation/う.mp3"

const index = 4

export const rowU = [
  {
    audioPath: る,
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
    audioPath: ゆ,
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
    audioPath: む,
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
    audioPath: ふ,
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
    audioPath: ぬ,
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
    audioPath: つ,
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
    audioPath: す,
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
    audioPath: く,
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
    audioPath: う,
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
