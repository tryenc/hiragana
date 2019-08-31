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

const index = 6

export const rowO = [
  {
    audioPath: wo,
    character: "を",
    gridPosition: {
      "landscape-primary": {
        gridArea: `${index} / 2`
      },
      "portrait-primary": {
        gridArea: `11 / ${index}`
      }
    }
  },
  {
    audioPath: ro,
    character: "ろ",
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
    audioPath: yo,
    character: "よ",
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
    audioPath: mo,
    character: "も",
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
    audioPath: ho,
    character: "ほ",
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
    audioPath: no,
    character: "の",
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
    audioPath: to,
    character: "と",
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
    audioPath: so,
    character: "そ",
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
    audioPath: ko,
    character: "こ",
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
    audioPath: o,
    character: "お",
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
