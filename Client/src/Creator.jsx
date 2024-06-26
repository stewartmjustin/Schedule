function Creator() {
    async function createEvent(Name, Day) {
        if (!Name || !Day) {
            alert("Fields were left empty!")
            return
        }
        await fetch("http://localhost:3000/events", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({Name: Name, day: Day}),
        }).then(
            response => response.json()
        ).then(
            response => console.log(response)
        )
        document.getElementById("ViewBtn").click()
    }
    return (
        <>
            <h1>Creator</h1>
            <label htmlFor="name">Event Name: </label>
            <input id="name" type="text" />
            <br />
            <label htmlFor="day">Enter date (YYYY-MM-DD): </label>
            <input id="day" type="date" />
            <button type="button" className="good" onClick={() => {createEvent(document.getElementById("name").value, document.getElementById("day").value)}}>Create!</button>
        </>
    )
}

export default Creator