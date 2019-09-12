import getGridPosition from "./getGridPosition"

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
    expect(getGridPosition(character, orientation)).toBe(gridPosition)
  }
)
