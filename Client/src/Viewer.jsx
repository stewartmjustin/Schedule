import { useEffect, useState } from "react"

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
            {(typeof weeksData === 'undefined') ? (
                <h1>No Events Found</h1>
            ): (
                weeksData.map((obj, i) => (
                    <p key={i}>{"Event ID: " + obj.ID + "\t\tEvent Name: " + obj.Name + "\t\tEvent Date: " + obj.day}</p>
                ))
            )}
        </>
    )
}

export default Viewer