import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

const CONNECTION_URL = "mongodb+srv://demo:<db_password>@clusterdemo0.8wbeaxw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDemo0"
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Createe");
})