import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

import postRoutes from "./routes/posts.js"

const app = express()

app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())


app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/api/posts', postRoutes)

// MongoDB connection URL
const CONNECTION_URL = "mongodb+srv://demo:demo123@clusterdemo0.8wbeaxw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDemo0"

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(PORT, () => {
        console.log("Server Runing on ${PORT}")

    })

}).catch((error) => console.log(error.message)
)
