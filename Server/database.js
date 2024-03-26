import mysql from 'mysql2'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({path: path.resolve(__dirname, './.env')})

var pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getEvents() {
    const [rows] = await pool.query("SELECT * FROM events ORDER BY day ASC")
    return rows
}

export async function getEvent(ID) {
  const [rows] = await pool.query('SELECT * FROM events WHERE ID = ?', [ID])
  return rows[0]
}

export async function createEvent(Name, day) {
  const [result] = await pool.query('INSERT INTO events (Name, day) VALUES (?, ?)', [Name, day])
  const id = result.insertId
  return getEvent(id)
}

export async function getWeeks(X, Y) {
  const [rows] = await pool.query('SELECT * FROM events WHERE day BETWEEN (?) AND (?) ORDER BY day ASC', [Y, X])
  return rows
}

export async function delEventID(ID) {
  const [rows] = await pool.query('DELETE FROM events WHERE ID=(?)', [ID])
  return rows
}

export async function delEventsID(min, max) {
  const [rows] = await pool.query('DELETE FROM events WHERE ID BETWEEN (?) AND (?)', [min, max])
  return rows
}

export async function delEventName(Name) {
  const [rows] = await pool.query('DELETE FROM events WHERE Name=(?)', [Name])
  return rows
}

export async function delEventDates(day1, day2) {
  const [rows] = await pool.query('DELETE FROM events WHERE day > (?) AND day < (?)', [day1, day2])
  return rows
}

export async function delAll() {
  const [rows] = await pool.query('DELETE FROM events')
  return rows
}

//const events = await getEvents()
/*const events = await getEvent(1)*/
/*const events = await createEvent("test3")*/
/*const events = await getWeeks('2024-03-01', '2024-02-17')*/
/*const events = await delEventID(9)*/
//const events = await delEventsID(24, 27)
//console.log(events)