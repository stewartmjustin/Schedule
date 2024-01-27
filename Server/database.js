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
    const [rows] = await pool.query("SELECT * FROM events")
    return rows
}

export async function getEvent(ID) {
  const [rows] = await pool.query('SELECT * FROM events WHERE ID = ?', [ID])
  return rows
}

export async function createEvent(Name) {
  const [result] = await pool.query('INSERT INTO events (Name) VALUES (?)', [Name])
  const id = result.insertId
  return getEvent(id)
}

/*const events = await getEvents()*/
/*const events = await getEvent(1)*/
/*const events = await createEvent("test3")*/
/*console.log(events)*/