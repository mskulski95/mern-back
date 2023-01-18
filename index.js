const config = require('./config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
mongoose.set('strictQuery', true);

mongoose
    .connect(mongoUrl, {})
    .then(() => {
        console.log('MongoDB is conected');
    })
    .catch((err) => {
        throw err
    })

const app = express();
app.use(express.json());

app.use(cors());

const eventsRoutes = require('./app/routes/EventsRoutes')()
app.use('/events', eventsRoutes)

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(config.app.port, function () {
    console.log('Express server is up!');
})