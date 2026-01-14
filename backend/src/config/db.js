const mongoose = require('mongoose')
const {ENV} = require('./env')

exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log("MongoDB connected: ", conn.connection.host)
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error)
        process.exit(1)
    }
}