import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  const message = `V2: host : ${os.hostname}`;
  console.log(message)
  res.send(message)
})

app.listen(PORT, () =>{
  console.log(`Running: http://localhost:${PORT}`)
})