import dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost: ${port}`);
}

app.get('/', callBack);

function callBack(req, res) {
    res.sendFile('dist/index.html');
}

app.post("/add", async (req, res) => {
    console.log("here" + `${baseURL}${apiKey}&lang=auto&url=${req.body.url}`);
    
    try {
        const apiData = await fetch(`${baseURL}${apiKey}&lang=auto&url=${req.body.url}`, {
            method: 'POST'
        });

        const data = await apiData.json();
        res.send(data);
    } catch (err) {
        console.log("error", err);
    }
});
