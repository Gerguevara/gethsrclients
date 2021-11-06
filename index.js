const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.post('/notify', function (req, res) {
    // here we can can  get hasuras info
    console.log(req.body);
    console.log(req.body.event.data.new);
    res.json({
        ok: true,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.UAESEvch27JtozaRKhoLZpqRCx1RyNJdlc0TeEymZtg'
    });
})

app.listen(process.env.PORT || 5000, () => {
    console.log('App is ready running');
})




