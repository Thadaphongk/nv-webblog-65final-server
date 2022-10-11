const { Book } = require('../models')

module.exports = {

    async create(req, res) {
        try {
            const book = await Book.create(req.body)
            res.send(book.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create book incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Book.update(req.body, {
                where: {
                    id: req.params.bookId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update book incorrect'
            })
        }

    },

    async remove(req, res) {
        try {
            const book = await Book.findOne({
                where: {
                    id: req.params.bookId
                }
            })
            if (!book) {
                return res.status(403).send({
                    error: 'The book information was incorrect'
                })
            }
            await book.destroy()
            res.send(book)
        } catch (err) {
            res.status(500).send({
                error: 'The book information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const book = await Book.findByPk(req.params.bookId)
            res.send(book)
        } catch (err) {
            res.status(500).send({
                error: 'The book information was incorrect'
            })
        }
    },

    async index(req, res) {
        try {
            const books = await Book.findAll()
            res.send(books)
        } catch (err) {
            res.status(500).send({
                error: 'The books information was incorrect'
            })
        }
    }

}