import { BrowserRouter as Router, Route } from "react-router-dom"
import React from "react"
import { Header } from "./molecules/Header/Header"
import { FindMatchingCharacter } from "./organisms/FindMatchingCharacter/FindMatchingCharacter"
import { FindMatchingSound } from "./organisms/FindMatchingSound/FindMatchingSound"
import { Game } from "./organisms/Game/Game"
import { HiraganaChart } from "./organisms/HiraganaChart/HiraganaChart"

const FindMatchingCharacterGame = () => (
  <Game>{props => <FindMatchingCharacter {...props} />}</Game>
)
const FindMatchingSoundGame = () => (
  <Game>{props => <FindMatchingSound {...props} />}</Game>
)

const App = () => {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col">
        <Header />
        <Route exact path="/" component={HiraganaChart} />
        <Route
          exact
          path="/find-matching-character"
          component={FindMatchingCharacterGame}
        />
        <Route
          exact
          path="/find-matching-pronunciation"
          component={FindMatchingSoundGame}
        />
      </div>
    </Router>
  )
}

export default App
