const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = () => {
    const app = express()
    app.set('port', process.env.PORT || 3001)

    app.use(bodyParser.json())
    app.use(cors())

    require('../api/routes/getReminders.js')(app); //Leitura dos lembretes
    require('../api/routes/reminder.js')(app); //Inserir lembretes
    require('../api/routes/updateReminder')(app); //atualizar lembretes
    require('../api/routes/deleteReminder')(app); //excluir lembretes

    return app
}