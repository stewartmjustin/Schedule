function DelName() {
    async function deleteNameFetch(Name) {
        await fetch("http://localhost:3000/delEvents/Name/" + Name, {
            method: "DELETE",
        }).then(
            response => response.json()
        ).then(
            response => console.log(response)
        )
        document.getElementById("ViewBtn").click()
    }
    return (
        <>
            <h2>Name</h2>
            <label htmlFor="delName">Name of Event to be deleted: </label>
            <input type="text" id="delName"></input>
            <button className="del" type="button" onClick={() => {deleteNameFetch(document.getElementById('delName').value)}}>Delete!</button>
        </>
    )
}

export default DelName