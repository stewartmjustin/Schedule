import { useEffect, useState } from "react"
import Event from "./Event"

function Viewer() {
    const [weeksData, setWeeks] = useState([{}])
    const [xEvents, setXEvents] = useState(0)
    function getNextWeeks(X) {
        fetch("http://localhost:3000/events/weeks/" + X).then(
            response => response.json()
        ).then(
            data => {
                setWeeks(data)
                console.log(data)
            }
        )
        console.log("UPDATED!")
    }

    useEffect(() => {
        getNextWeeks(2)
    }, [])
    return ( 
        <>
            <h1>Viewer</h1>
            {/*<label htmlFor="allEventsCheck">Show All Events: </label>
            <input type="checkbox" id="allEventsCheck" /><br />*/}
            <label htmlFor="weeksNumber">See Events for how many weeks ahead?</label>
            <input type="number" id="weeksNumber" defaultValue={2} onChange={() => {getNextWeeks(document.getElementById('weeksNumber').value)}}></input>
            <button type="button" className="good" id="ViewBtn" onClick={() => {getNextWeeks(document.getElementById('weeksNumber').value)}}>Submit</button>
            {/*</><div className="isEvents">*/}
            <div className="isEvents">
                {(typeof weeksData === 'undefined') ? (
                    <h1>No Events Found</h1>
                ): (
                    weeksData.map((obj, i) => (
                        <Event key={i} ID={obj.ID} Name={obj.Name} Day={obj.day} />
                    ))
                )}
            </div>
            {/*</div>*/}
        </>
    )
}

export default Viewer