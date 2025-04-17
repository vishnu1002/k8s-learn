import express from 'express'
import fetch from 'node-fetch'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  const message = `V2: host : ${os.hostname}`
  console.log(message)
  res.send(message)
})

app.get("/nginx", async(req, res) => {
  const response = await fetch("http://nginx")
  const body = await response.text()
  res.send(body)
})

app.listen(PORT, () =>{
  console.log(`Running: http://localhost:${PORT}`)
})