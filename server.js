const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// axios create
const ApiClient = axios.create({
    baseURL: 'https://echo-serv.tbxnet.com/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer aSuperSecretKey'}
});

// get
app.get('/', function (req, res) {
    res.send('Hello Worlds');
});

// list files
app.get('/files/list', async function (req, res) {
    await ApiClient.get('v1/secret/files', {timeout: 1500})
        .then(response => {
            //console.log(response.data.files);
            res.send(response.data.files);
        });
});

// content file
app.get('/files/data', async function (req, res) {
    try {
        let files = [];
        await ApiClient.get(`v1/secret/file/${req.query.fileName}`, {timeout: 1500})
            .then(response => {
                const resp = response.data.split(/\r\n|\n/); // to array
                resp.map((row) => {
                    let line = row.split(',');
                    if(line.length == 4)
                    {
                        files.push({
                            text:line[1],
                            number:line[2],
                            hex:line[3]
                        });
                    }
                });
                let data = JSON.stringify({file:req.query.fileName, lines:files});
                //console.log(data);
                res.send(data);
            });
    }
    catch (error) {
        error.statusCode = 404;
        throw new error;
    }
});

// set port, listen for requests
const PORT = process.env.PORT || 8010;
console.log(PORT);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
