let express = require('express');
const { sequelize } = require('./models');
let cors = require('cors')
const config = require('./config/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/assets', express.static('public'))

require('./userPassport')

require('./route.js')(app)


let port = process.env.PORT || config.port;
sequelize.sync({ force: false }).then(() => {
    app.listen(port, function () {
        console.log('server running on ' + port);
    })
})
