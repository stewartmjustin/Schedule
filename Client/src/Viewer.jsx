import { useEffect, useState } from "react"
import Event from "./Event"

function Viewer() {
    const [weeksData, setWeeks] = useState([{}])
    const [allEvents, setAllEvents] = useState(false)
    function getNextWeeks(X) {
        fetch("http://localhost:3000/events/weeks/" + X).then(
            response => response.json()
        ).then(
            data => {
                setWeeks(data)
            }
        )
    }

    function getEvents() {
        fetch("http://localhost:3000/events").then(
            response => response.json()
        ).then(
            data => {
                setWeeks(data)
            }
        )
    }

    useEffect(() => {
        getNextWeeks(2)
    }, [])

    return ( 
        <>
            <h1>Viewer</h1>
            <div className="inline">
                <label htmlFor="allEventsCheck">Show All Events: </label>
                <input type="checkbox" id="allEventsCheck" onClick={() => {setAllEvents(document.getElementById("allEventsCheck").checked);  /*void(!allEvents && getEvents())*/(allEvents) ? (getNextWeeks(2)): (getEvents())}}/>
            </div>
            {(allEvents) ? (
                <button type="button" className="good" id="ViewBtn">Update!</button>
            ): (
                <>
                    <label htmlFor="weeksNumber">See Events for how many weeks ahead?</label>
                    <input type="number" id="weeksNumber" defaultValue={2} onChange={() => {getNextWeeks(document.getElementById('weeksNumber').value)}}></input>
                    <button type="button" className="good" id="ViewBtn" onClick={() => {getNextWeeks(document.getElementById('weeksNumber').value)}}>Submit</button>
                </>
            )}
            
            <div className="isEvents">
                {(JSON.stringify(weeksData) === '[]') ? (
                    <h1>No Events Found</h1>
                ): (
                    weeksData.map((obj, i) => (
                        <Event key={i} ID={obj.ID} Name={obj.Name} Day={obj.day} />
                    ))
                )}
            </div>
        </>
    )
}

export default Viewer