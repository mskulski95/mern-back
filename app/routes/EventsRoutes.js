const express = require('express');
const router = express.Router();
const EventsController = require('../controllers/EventsController');

module.exports = () => {
    //GET /events (pobranie wszystkich wydarzeń)
    router.get('/', EventsController.index)

    //POST/events (dodawanie)
    router.post('/add', EventsController.create)

    //DELETE /events (usuwanie)
    router.delete('/delete/:id', EventsController.delete)

    return router
}