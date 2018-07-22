const express = require('express')
const path = require('path')
const config = require('config')

const app = express()
const PORT = process.env.PORT || config.PORT
// const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI

const people = [
    { name: 'Name 1', time: 'Week 1', index: 1, id: 'item=1' },
    { name: 'Name 2', time: 'Week 2', index: 2, id: 'item=2' },
    { name: 'Name 3', time: 'Week 3', index: 3, id: 'item=3' },
    { name: 'Name 4', time: 'Week 4', index: 4, id: 'item=4' },
    { name: 'Name 5', time: 'Week 5', index: 5, id: 'item=5' },
]

app.use('/', express.static(path.join(__dirname, '../build')))

app.get('/rotation', (req, res) => {
    res.status(200).json({ people })
})

app.listen(PORT, () => {
    // await mongoose.connect(MONGODB_URI)
    console.log(`Listening on port ${PORT}`)
})