import {
  getCharacterGridPosition,
  getSoundGridPosition
} from "./getGridPosition"

describe("getCharacterGridPosition", () => {
  test.each`
    character | orientation            | gridPosition
    ${"ら"}   | ${"landscape-primary"} | ${"2 / 3"}
    ${"ね"}   | ${"landscape-primary"} | ${"5 / 7"}
    ${"し"}   | ${"landscape-primary"} | ${"3 / 9"}
    ${"ら"}   | ${"portrait-primary"}  | ${"10 / 2"}
    ${"ね"}   | ${"portrait-primary"}  | ${"6 / 5"}
    ${"し"}   | ${"portrait-primary"}  | ${"4 / 3"}
  `(
    "returns $gridPosition when character is $character and orientation is $orientation",
    ({ character, orientation, gridPosition }) => {
      expect(getCharacterGridPosition(character, orientation)).toBe(
        gridPosition
      )
    }
  )
})

describe("getSoundGridPosition", () => {
  test.each`
    sound   | orientation            | gridPosition
    ${"N"}  | ${"landscape-primary"} | ${"1 / 1"}
    ${"T-"} | ${"landscape-primary"} | ${"1 / 8"}
    ${"-O"} | ${"landscape-primary"} | ${"6 / 12"}
    ${"N"}  | ${"portrait-primary"}  | ${"12 / 1"}
    ${"T-"} | ${"portrait-primary"}  | ${"5 / 1"}
    ${"-O"} | ${"portrait-primary"}  | ${"1 / 6"}
  `(
    "returns $gridPosition when sound is $sound and orientation is $orientation",
    ({ sound, orientation, gridPosition }) => {
      expect(getSoundGridPosition(sound, orientation)).toBe(gridPosition)
    }
  )
})
