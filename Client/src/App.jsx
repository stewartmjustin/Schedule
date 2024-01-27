import {useEffect, useState} from "react"

function App() {

  const [eventData, setEvents] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:3000/events").then(
      response => response.json()
    ).then(
      data => {
        setEvents(data)
      }
    )
  }, [])
  return (
    <>
      {(typeof eventData === 'undefined') ? (
        <h1>Loading...</h1>
      ): (
        eventData.map((obj, i) => (
          <p key={i}>{"Event ID: " + obj.ID + "\t\tEvent Name: " + obj.Name}</p>
        ))
      )}
    </>
  )
}

export default App
