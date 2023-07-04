const express = require('express')
const app = express()
const port = 33000

app.get('/', (req, res) => {
  res.send('Hellloo World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
