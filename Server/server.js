import express from "express"
import { getEvents, getEvent, createEvent, getWeeks } from "./database.js";
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json())

function getCurDate() {
    const date = new Date();
    return date;
}

function getSunDate() {
    const date = getCurDate();
    date.setDate(date.getDate() - date.getDay())
    return date
}

function getFutureDate(oldDate, Y) {
    const fDate = new Date(oldDate)
    fDate.setDate(fDate.getDate() + Y * 7)
    fDate.setDate(fDate.getDate() + (7 - fDate.getDay()))
    return fDate
}

app.get("/events", async (req, res) => {
    const events = await getEvents()
    //console.log(events)
    //res.json({"events": events})
    res.send(events)
})

app.get("/events/:id", async (req, res) => {
    const id = req.params.id
    const event = await getEvent(id)
    res.send(event)
})

app.post("/events", async (req, res) => {
    const { Name } = req.body
    const note = await createEvent(Name)
    res.status(201).send(note)
})

app.post("/delEvents", async (req, res) => {
    /*Delete!*/
})

app.get("/events/weeks/:Y", async (req, res) => {
    const y = req.params.Y
    const date = getSunDate()
    const futureDate = getFutureDate(date, y)
    const events = await getWeeks(futureDate, date)
    res.send(events)
})

app.use((err, req, res, send) => {
    console.error(err.stack)
    res.status(500).send("something broke")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})