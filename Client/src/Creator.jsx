function Creator() {
    function createEvent(Name, Day) {
        if (!Name || !Day) {
            alert("Fields were left empty!")
            return
        }
        fetch("http://localhost:3000/events", {
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
    }
    return (
        <>
            <h1>creator</h1>
            <label htmlFor="name">Event Name: </label>
            <input id="name" type="text" />
            <br />
            <label htmlFor="day">Enter date (YYYY-MM-DD): </label>
            <input id="day" type="date" />
            <button type="button" onClick={() => {createEvent(document.getElementById("name").value, document.getElementById("day").value)}}>Create!</button>
        </>
    )
}

export default Creator