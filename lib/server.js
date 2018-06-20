const express = require('express')
const app = express()
const PORT = 8080

const people = [
    { name: 'Name 1', time: 'Week 1', index: 1 },
    { name: 'Name 2', time: 'Week 2', index: 2 },
    { name: 'Name 3', time: 'Week 3', index: 3 },
    { name: 'Name 4', time: 'Week 4', index: 4 },
    { name: 'Name 5', time: 'Week 5', index: 5 },
]

app.get('/rotation', (req, res) => {
    res.status(200).json({ people })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})