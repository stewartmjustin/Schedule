import express from "express"
import { getEvents, getEvent, createEvent, getWeeks, delEventID, delEventName, delEventDates } from "./database.js";
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

app.delete("/delEvents/Name/:Name", async (req, res) => {
    const Name = req.params.Name
    const note = await delEventName(Name)
    res.status(201).send(note)
})

app.delete("/delEvents/old", async (req, res) => {
    const day2 = getCurDate()
    const day1 = getOldestDate()
    const note = await delEventDates(day1, day2)
    res.status(201).send(note)
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