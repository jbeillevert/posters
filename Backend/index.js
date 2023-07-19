require("dotenv").config();
const express = require("express")
const router = require("./src/01.navigation/routes.js")
const cors = require('cors');

const app = express()
const port = process.env.APP_PORT


app.use(cors({
  origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
  optionsSuccessStatus: 200,
}));


app.use(express.json())
app.use(router)


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})