const express = require('express')
const app = express()
const port = 33000

app.get('/', (req, res) => {
  res.send('2hghghgh2222222Hello World! i am here')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
