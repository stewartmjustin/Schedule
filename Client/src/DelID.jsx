function DelID() {
    function deleteFetch(X) {
        fetch("http://localhost:3000/delEvents/" + X, {
            method: 'DELETE',
        }).then(
            response => response.json()
        ).then(
            response => console.log(response)
        )
    }
    return (
        <>
            <h2>ID</h2>
            <label htmlFor="delID">ID of Event to be deleted: </label>
            <input type="number" id="delID" defaultValue={1}></input>
            <button type="button" onClick={() => {deleteFetch(document.getElementById('delID').value)}}>Delete!</button>
        </>
    )
}

export default DelID