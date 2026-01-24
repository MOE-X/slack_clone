const express = require('express')
const {ENV} = require('./config/env')
const {connectDB} = require('./config/db')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
}
)
app.listen(ENV.PORT, () => {
    console.log("Server started on port " + ENV.PORT + "!");
    connectDB()
})