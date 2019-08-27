import React from "react"
import { Character } from "./Character"
import { rowA, rowI, rowU, rowE, rowO } from "./row-configs/index"

function App() {
  return (
    <table className="w-screen h-screen table-fixed border-collapse">
      <thead>
        <tr>
          {["N", "W", "R", "Y", "M", "H", "N", "T", "S", "K", null, null].map(
            letter => (Boolean(letter) ? <th>{letter}</th> : <th></th>)
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          {rowA.map((letter, index) => {
            return letter !== null ? (
              <td className="p-2" key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
          <th>A</th>
        </tr>
        <tr>
          {rowI.map((letter, index) => {
            return letter !== null ? (
              <td className="p-2" key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
          <th>I</th>
        </tr>
        <tr>
          {rowU.map((letter, index) => {
            return letter !== null ? (
              <td className="p-2" key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
          <th>U</th>
        </tr>
        <tr>
          {rowE.map((letter, index) => {
            return letter !== null ? (
              <td className="p-2" key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
          <th>E</th>
        </tr>
        <tr>
          {rowO.map((letter, index) => {
            return letter !== null ? (
              <td className="p-2" key={letter.character}>
                <Character
                  audioPath={letter.audioPath}
                  character={letter.character}
                />
              </td>
            ) : (
              <td key={index}></td>
            )
          })}
          <th>O</th>
        </tr>
      </tbody>
    </table>
  )
}

export default App
