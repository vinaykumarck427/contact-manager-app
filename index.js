const express = require('express')
const cors = require('cors')

const { mongoose } = require('./config/database')
mongoose.set('useFindAndModify', false);

const app = express()

const router = require('./config/routes')
const router2 = require('./app/controllers/usersController')

const path = require("path");
const port = process.env.PORT || 3007;
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json())
app.use(cors())

app.use('/contacts',router)
app.use('/users',router2)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
    console.log('listening on port', port)
})