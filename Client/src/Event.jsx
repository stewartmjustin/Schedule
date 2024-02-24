function Event(props) {
    return (
        <div className="Event">
            <h1>Event!</h1>
            <p>ID: {props.ID}</p>
            <p>Name: {props.Name}</p>
            <p>Date: {props.Day}</p>
        </div>
    )
}

export default Event