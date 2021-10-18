const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({
    extended: true
}))



app.get('/', function (req, res) {
    res.send('Hello Mi amor')
})


app.post('/login', function (req, res) {


    const { user, password } = req.body

    if (user == 'Debi' && password == 'miau') {

        res.json({
            ok: true,
            token: 'miaumiaumiaumiaumiaumiaumiaumiaumiau'
        });
    } else {
        res.json({
            ok: false
        });
    }



})

app.listen(process.env.PORT || 5000)




