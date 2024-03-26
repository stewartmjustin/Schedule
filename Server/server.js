import express from "express"
import { getEvents, getEvent, createEvent, getWeeks, delEventID, delEventsID, delEventName, delEventDates, delAll } from "./database.js";
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json())

function getYesterdayDate() {
    const date = new Date();
    date.setDate(date.getDate() - 1)
    return date;
}

function getFutureDate(oldDate, Y) {
    const fDate = new Date(oldDate)
    fDate.setDate(fDate.getDate() + Y * 7)
    return fDate
}

function getOldestDate() {
    const date = new Date(0, 1, 1)
    return date
}

app.get("/events", async (req, res) => {
    const events = await getEvents()
    res.send(events)
})

app.get("/events/:id", async (req, res) => {
    const id = req.params.id
    const event = await getEvent(id)
    res.send(event)
})

app.post("/events", async (req, res) => {
    const Name = req.body.Name
    const day = req.body.day
    const note = await createEvent(Name, day)
    res.send(note)
})

app.delete("/delEvents/id/:id", async (req, res) => {
    const id = req.params.id
    const note = await delEventID(id)
    res.status(201).send(note)
})

app.delete("/delEvents/min/:min/max/:max", async (req, res) => {
    const min = req.params.min
    const max = req.params.max
    const note = await delEventsID(min, max)
    res.send(note)
})

app.delete("/delEvents/Name/:Name", async (req, res) => {
    const Name = req.params.Name
    const note = await delEventName(Name)
    res.status(201).send(note)
})

app.delete("/delEvents/old", async (req, res) => {
    const day2 = getYesterdayDate()
    const day1 = getOldestDate()
    const note = await delEventDates(day1, day2)
    res.status(201).send(note)
})

app.delete("/delEvents", async (req, res) => {
    const note = await delAll()
    res.send(note)
})

app.get("/events/weeks/:Y", async (req, res) => {
    const y = req.params.Y
    const date = new Date()
    const futureDate = getFutureDate(date, y)
    const events = await getWeeks(futureDate, date)
    res.send(events)
})

app.use((err, req, res, send) => {
    console.error(err.stack)
    res.status(500).send("something broke")
})

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000")
})