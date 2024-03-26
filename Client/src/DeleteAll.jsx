function DeleteAll() {
    async function deleteAllEvents() {
        await fetch("http://localhost:3000/delEvents", {
            method: 'DELETE',
        }).then(
            response => response.json()
        ).then(
            response => console.log(response)
        )
        document.getElementById("ViewBtn").click()
    }
    return(
        <>
            <h2>DELETE ALL EVENTS?</h2>
            <button type="button" className="del" onClick={() => {if (confirm("Delete all Events?")) deleteAllEvents()}}>DELETE!</button>
        </>
    )
}

export default DeleteAll