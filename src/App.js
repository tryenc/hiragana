import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React, { Suspense, lazy } from "react"

const Table = lazy(() => import("./pages/Table"))
const MatchSoundToCharacter = lazy(() =>
  import("./pages/MatchSoundToCharacter")
)

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Table} />
          <Route
            path="/match-sound-to-character"
            component={MatchSoundToCharacter}
          />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
