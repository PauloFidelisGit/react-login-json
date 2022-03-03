const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./Routes/Route');

app.use('/', routes)

const port = 3001;

app.listen(port, () => {
    console.log(`Servindor rodando na prota ${port}`);
})