import React from "react"
import { Character } from "./Character"
import { rowA, rowI, rowU, rowE, rowO } from "./row-configs/index"

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>N</th>
          <th>W</th>
          <th>R</th>
          <th>Y</th>
          <th>M</th>
          <th>H</th>
          <th>N</th>
          <th>T</th>
          <th>S</th>
          <th>K</th>
          <th>A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>A</th>
          {rowA.map((letter, index) => {
            return letter !== null ? (
              <td key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
        </tr>
        <tr>
          <th>I</th>
          {rowI.map((letter, index) => {
            return letter !== null ? (
              <td key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
        </tr>
        <tr>
          <th>U</th>
          {rowU.map((letter, index) => {
            return letter !== null ? (
              <td key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
        </tr>
        <tr>
          <th>E</th>
          {rowE.map((letter, index) => {
            return letter !== null ? (
              <td key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
        </tr>
        <tr>
          <th>O</th>
          {rowO.map((letter, index) => {
            return letter !== null ? (
              <td key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}

export default App
