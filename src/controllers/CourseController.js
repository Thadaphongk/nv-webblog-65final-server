const { Course } = require('../models')

module.exports = {

    async create(req, res) {
        try {
            const course = await Course.create(req.body)
            res.send(course.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create course incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Course.update(req.body, {
                where: {
                    id: req.params.courseId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update course incorrect'
            })
        }

    },

    async remove(req, res) {
        try {
            const course = await Course.findOne({
                where: {
                    id: req.params.courseId
                }
            })
            if (!course) {
                return res.status(403).send({
                    error: 'The course information was incorrect'
                })
            }
            await course.destroy()
            res.send(course)
        } catch (err) {
            res.status(500).send({
                error: 'The course information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const course = await Course.findByPk(req.params.courseId)
            res.send(course)
        } catch (err) {
            res.status(500).send({
                error: 'The course information was incorrect'
            })
        }
    },

    async index(req, res) {
        try {
            const course = await Course.findAll()
            res.send(course)
        } catch (err) {
            res.status(500).send({
                error: 'The courses information was incorrect'
            })
        }
    }

}