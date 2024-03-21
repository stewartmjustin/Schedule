import React, {useEffect, useState} from "react"
import Viewer from "./Viewer"
import Creator from "./Creator"
import Delete from "./Delete"

function App() {

  return (
    <>
      <Viewer />
      <Creator />
      <Delete />
    </>
  )
}

export default App
