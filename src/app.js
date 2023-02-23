const express = require("express")
const bodyParser = require("body-parser")
const conn = require("./db/data")
const router = require("./routes/router")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

conn()

const mainRoute = "api"
app.use(`/${mainRoute}`, router)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Aplicação rodando!")
    console.log(`http://localhost:${port}/${mainRoute}`)
})