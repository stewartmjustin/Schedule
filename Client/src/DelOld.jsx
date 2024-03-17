function DelOld() {
    async function runOldDelete() {
        await fetch("http://localhost:3000/delEvents/old", {method: 'DELETE', }).then(
            response => response.json()
        ).then(
            response => console.log(response)
        )
        document.getElementById("ViewBtn").click()
    }
    return (
        <>
            <h2>Delete All Past Events?</h2>
            <button className="del" type="button" onClick={() => {if (confirm("Delete all past Events?")) runOldDelete()}}>Delete!</button>
        </>
    )
}

export default DelOld