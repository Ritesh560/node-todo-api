const express = require("express")
const app = express()

//routes
app.use("/todos", require("../controllers/todos"))
app.use("/user", require("../controllers/userDetails"))
app.use("/", (req, res) => {
  res.status(200).send("Server is working properly.")
})

module.exports = app
