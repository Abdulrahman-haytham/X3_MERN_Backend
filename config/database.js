const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery',false)
        const conn = await mongoose.connect(process.env.MongoURI)
        console.log(`mongo has been connected successfully ${conn.Connection.host}`)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB