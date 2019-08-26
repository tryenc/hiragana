import React from "react"
import { Character } from "./Character"
import { Cell, Header } from "./Cell"
import { rowA, rowI, rowU, rowE, rowO } from "./row-configs/index"

function App() {
  return (
    <table className="container table-fixed border-collapse">
      <thead>
        <tr>
          <Header>N</Header>
          <Header>W</Header>
          <Header>R</Header>
          <Header>Y</Header>
          <Header>M</Header>
          <Header>H</Header>
          <Header>N</Header>
          <Header>T</Header>
          <Header>S</Header>
          <Header>K</Header>
          <Header></Header>
          <Header></Header>
        </tr>
      </thead>
      <tbody>
        <tr>
          {rowA.map((letter, index) => {
            return letter !== null ? (
              <Cell key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </Cell>
            ) : (
              <Cell key={index}></Cell>
            )
          })}
          <Header>A</Header>
        </tr>
        <tr>
          {rowI.map((letter, index) => {
            return letter !== null ? (
              <Cell key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </Cell>
            ) : (
              <Cell key={index}></Cell>
            )
          })}
          <Header>I</Header>
        </tr>
        <tr>
          {rowU.map((letter, index) => {
            return letter !== null ? (
              <Cell key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </Cell>
            ) : (
              <Cell key={index}></Cell>
            )
          })}
          <Header>U</Header>
        </tr>
        <tr>
          {rowE.map((letter, index) => {
            return letter !== null ? (
              <Cell key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </Cell>
            ) : (
              <Cell key={index}></Cell>
            )
          })}
          <Header>E</Header>
        </tr>
        <tr>
          {rowO.map((letter, index) => {
            return letter !== null ? (
              <Cell key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </Cell>
            ) : (
              <Cell key={index}></Cell>
            )
          })}
          <Header>O</Header>
        </tr>
      </tbody>
    </table>
  )
}

export default App
