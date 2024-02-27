import React, {useEffect, useState} from "react"
import Viewer from "./Viewer"
import Creator from "./Creator"

function App() {

  const [eventData, setEvents] = useState([{}])

  function getEvents() {
    fetch("http://localhost:3000/events").then(
      response => response.json()
    ).then(
      data => {
        setEvents(data)
      }
    )
  }

  useEffect(() => {
    setEvents(undefined)
  }, [])
  return (
    <>
      <Viewer />
      <Creator />
    </>
  )
}

export default App
