const express = require('express')
const app = express()
const port = 33000

app.get('/', (req, res) => {
  res.send('Ljjj Hellloo World! 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
