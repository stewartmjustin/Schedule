import React, {useEffect, useState} from "react"
import Login from "./Login"

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
      <button onClick={() => {getEvents()}}>Get Events!</button>
      {(typeof eventData === 'undefined') ? (
        <h1>Undefined</h1>
      ): (
        eventData.map((obj, i) => (
          <p key={i}>{"Event ID: " + obj.ID + "\t\tEvent Name: " + obj.Name}</p>
        ))
      )}
      <button onClick={console.log(eventData)}>log</button>
      <Login />
    </>
  )
}

export default App
