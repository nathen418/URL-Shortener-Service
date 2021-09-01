// import mongoose package
const mongoose = require('mongoose')

// declare a Database string URI
const DB_URI = 'mongodb uri'

// establishing a database connection
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

// export the connection object
module.exports = connection