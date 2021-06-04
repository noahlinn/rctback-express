const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001;
const rowdy = require('rowdy-logger').begin(app)

app.use(express.json())
app.use(require('cors')())



app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
    rowdy.print()
})