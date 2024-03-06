import { useEffect, useState } from "react"
import Event from "./Event"

function Viewer() {

    const [weeksData, setWeeks] = useState([{}])
    function getNextWeeks(X) {
        fetch("http://localhost:3000/events/weeks/" + X).then(
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
            <label htmlFor="weeksNumber">See Events for how many weeks ahead?</label>
            <input type="number" id="weeksNumber" defaultValue={2}></input>
            <button type="button" onClick={() => {getNextWeeks(document.getElementById('weeksNumber').value)}}>Submit</button>
            <div className="isEvents">
            {(typeof weeksData === 'undefined') ? (
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