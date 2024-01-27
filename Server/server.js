import express from "express"
import { getEvents, getEvent, createEvent } from "./database.js";
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json())

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

app.use((err, req, res, send) => {
    console.error(err.stack)
    res.status(500).send("something broke")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})