const express = require('express')
const app = express()
const port = 32000

app.get('/', (req, res) => {
  res.send('salam sadegh')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
