const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to db");
}).catch(err => {
    console.log("could no connect",err);
    process.exit();
});

require('./app/routes/note.routes.js')(app);

app.get('/', (req,res) => {
    res.json({"message": "Welcome to MOngo REST"});
});



app.listen(3002,() => {
    console.log("Server is listerning at 3001");
});

