let express = require('express')
let bodyParser = require('body-parser')

let cors = require('cors')
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extened: true }))
app.use(cors())

require('./route.js')(app)


let port = process.env.PORT || config.port

sequelize.sync({ force: false }).then(() => {
    app.listen(port, function () {
        console.log('server running on ' + port)
    })
})
