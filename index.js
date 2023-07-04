const express = require('express')
const app = express()
const port = 33000

app.get('/', (req, res) => {
  res.send('55555555555vaaay vayy , Hellllooooooooooo World! Naser')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
