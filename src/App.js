import { BrowserRouter as Router, Route } from "react-router-dom"
import React from "react"
import { withOrientation } from "./HOCs/withOrientation"
import { Header } from "./molecules/Header/Header"
import { FindMatchingCharacter } from "./organisms/FindMatchingCharacter/FindMatchingCharacter"
import { FindMatchingSound } from "./organisms/FindMatchingSound/FindMatchingSound"
import { Game } from "./organisms/Game/Game"
import { HiraganaChart } from "./organisms/HiraganaChart/HiraganaChart"

const HiraganaChartWithOrientation = withOrientation(HiraganaChart)
const FindMatchingCharacterGame = () => (
  <Game>
    {(possibleAnswers, reset) => (
      <FindMatchingCharacter possibleAnswers={possibleAnswers} reset={reset} />
    )}
  </Game>
)
const FindMatchingSoundGame = () => (
  <Game>
    {(possibleAnswers, reset) => (
      <FindMatchingSound possibleAnswers={possibleAnswers} reset={reset} />
    )}
  </Game>
)

const App = () => {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col">
        <Header />
        <Route exact path="/" component={HiraganaChartWithOrientation} />
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
