const express = require("express");
const app = express();
const mongoose = require("mongoose")

require("dotenv/config")

const bodyParser = require("body-parser");


// Middle ware
app.use(bodyParser.json());
const postRoute = require("./routes/posts");
app.use("/posts", postRoute)
// Routes // app.use use as a middleware and manage routes.
// app.get("/", (req, res) => {
//     res.send("Im inside home")
// })

// app.get("/posts", (req, res) => {
//     res.send("Im inside posts")
// })

// db connection. 
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log(`connected`)
})
// Listne port

app.listen(3000)