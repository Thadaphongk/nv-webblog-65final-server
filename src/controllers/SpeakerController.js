const { Speaker } = require('../models')

module.exports = {

    async create(req, res) {
        try {
            const speaker = await Speaker.create(req.body)
            res.send(speaker.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create speaker incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Speaker.update(req.body, {
                where: {
                    id: req.params.speakerId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update speaker incorrect'
            })
        }

    },

    async remove(req, res) {
        try {
            const speaker = await Speaker.findOne({
                where: {
                    id: req.params.speakerId
                }
            })
            if (!speaker) {
                return res.status(403).send({
                    error: 'The speaker information was incorrect'
                })
            }
            await speaker.destroy()
            res.send(speaker)
        } catch (err) {
            res.status(500).send({
                error: 'The speaker information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const speaker = await Speaker.findByPk(req.params.speakerId)
            res.send(speaker)
        } catch (err) {
            res.status(500).send({
                error: 'The speaker information was incorrect'
            })
        }
    },

    async index(req, res) {
        try {
            const speakers = await Speaker.findAll()
            res.send(speakers)
        } catch (err) {
            res.status(500).send({
                error: 'The speakers information was incorrect'
            })
        }
    }

}