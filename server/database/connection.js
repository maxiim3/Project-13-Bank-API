const mongoose = require('mongoose')


module.exports.dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database successfully connected')
    }
    catch (error) {
        console.error(`Database Connectivity Error: ${error}`)
        throw new Error(error)
    }
}


