const mongoose = require("mongoose")
require("dotenv").config()

const conn = async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority`)
        console.log("Banco rodando!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = conn