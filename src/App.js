import React, { useState } from "react"
import { Table } from "./Table"

function App() {
  const [orientation, setOrientation] = useState(window.screen.orientation.type)
  window.screen.orientation.addEventListener("change", e => {
    setOrientation(e.target.type)
  })

  return <Table orientation={orientation} />
}

export default App
