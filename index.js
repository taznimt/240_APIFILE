const express = require('express');
const connectDatabase = require('./config/db');
const conectDatabase = require('./config/db');
const apiRoute =require('./routes/api');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/v1', apiRoute)

async function startServer(){
    await conectDatabase();
    app.listen(PORT, ()=>{
        console.log(`Server running at http://localhost:${PORT}`);
    });
}
startServer();