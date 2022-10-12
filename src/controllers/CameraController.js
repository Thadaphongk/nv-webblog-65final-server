const { Camera } = require('../models')

module.exports = {
   
    async index(req, res) {
        try {
            const cameras = await Camera.findAll()
            res.send(cameras)
        } catch (err) {
            res.status(500).send({
                error: 'The cameras information was incorrect'
            })
        }
    },

   
    async create(req, res) {
        try {
            const camera = await Camera.create(req.body)
            res.send(camera.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create camera incorrect'
            })
        }
    },

   
    async put(req, res) {
        try {
            await camera.update(req.body, {
                where: {
                    id: req.params.cameraId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update camera incorrect'
            })
        }
    },

  
    async remove(req, res) {
        try {
            const camera = await Camera.findOne({
                where: {
                    id: req.params.cameraId
                }
            })

            if (!camera) {
                return res.status(403).send({
                    error: 'The camera information was incorrect'
                })
            }

            await camera.destroy()
            res.send(camera)
        } catch (err) {
            res.status(500).send({
                error: 'The camera information was incorrect'
            })
        }
    },

    
    async show (req, res) {
        try {
            const camera = await Camera.findByPk(req.params.cameraId)
            res.send(camera)
        } catch (err) {
            res.status(500).send({
                error: 'The camera information was incorrect'
            })
        }
    },
}