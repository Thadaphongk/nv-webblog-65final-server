const {User} = require('../models')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(res.body)
            res.send(user.toJSON())
        } catch (erro) {
            res.status(400).send({
                error: 'Thecontent information was incorrect'
            })
        }
    },

    async login (req,res){
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })


            if (!user) {
                return res.status(403).send({
                    error: 'User/Password not correct'
                })
            }


            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'User/Password not correct'
                })
            }
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            })
        
        } catch(error){
            res.status(500).send({
                error: 'Error! from get user'
            })
        }
    }
}