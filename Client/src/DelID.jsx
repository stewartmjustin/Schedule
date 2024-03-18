function DelID() {
    async function deleteIDFetch(X) {
        await fetch("http://localhost:3000/delEvents/id/" + X, {
            method: 'DELETE',
        }).then(
            response => response.json()
        ).then(
            response => console.log(response)
        )
        document.getElementById("ViewBtn").click()
    }

    async function deleteIDsFetch(min, max) {
        await fetch("http://localhost:3000/delEvents/min/" + min + "/max/" + max, {
            method: 'DELETE',
        }).then(
            response => response.json()
        ).then(
            response => console.log(response)
        )
        document.getElementById("ViewBtn").click()
    }
    return (
        <>
            <h2>ID</h2>
            <h3>Singular</h3>
            <label htmlFor="delID">ID of Event to be deleted: </label>
            <input type="number" id="delID" defaultValue={1}></input>
            <button className="del" type="button" onClick={() => {deleteIDFetch(document.getElementById('delID').value)}}>Delete!</button>
            <h3>Multiple</h3>
            <div className="inline">
                <label>Range of Events: </label>
                <input type="number" id="delIDMin" defaultValue={1} />
                <p>to</p>
                <input type="number" id="delIDMax" defaultValue={99} />
            </div>
            <button className="del" type="button" onClick={() => {deleteIDsFetch(document.getElementById('delIDMin').value, document.getElementById('delIDMax').value)}}>Delete!</button>
        </>
    )
}

export default DelID