const EventModel = require('../models/EventModel');

module.exports = {
    index: (req, res, next) => {
        EventModel.find({}, (err, result)=>{
            if(err) {
                return res.status(500).json({
                    message: 'Error while fetching Event',
                    error: err
                })
            }
            res.json(result);
        })
    },

    create: (req, res, next) => {
        const event = new EventModel({
            name: req.body.name,
            event: req.body.event,
            city: req.body.city
        })
        event.save((err, event)=>{
            if(err){
                return res.status(500).json({
                    message: 'Error while creating Event',
                    error: err
                })
            }

            return res.status(201).json(event)
        })
    }, 

    delete: (req, res, next) => {
        const id = req.params.id

        EventModel.findByIdAndRemove(id, (err, event)=>{
            if(err){
                return res.status(500).json({
                    message: 'Error while deleting Event',
                    error: err
                })
            }

            return res.status(200).json({
                id: id,
                deleted: true
            })
        })
    }
}