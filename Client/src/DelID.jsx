function DelID() {
    return (
        <>
            <h2>ID</h2>
            <label htmlFor="delID">ID of Event to be deleted: </label>
            <input type="number" id="delID" defaultValue={1}></input>
            <button type="button" onClick={() => {alert("Nothing for now!")}}>Delete!</button>
        </>
    )
}

export default DelID