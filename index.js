const StatusCodes = require('http-status-codes');
require('dotenv').config();
require('./conectiondb.js');
const getinfo = require('./functions/getinfousers.js');
const Users = require('./models/users.js');


const express = require('express');
const app = express()
app.use(express.json());


app.post('/shaperbox/v1/app-startSession', function (req, res) {

    getinfo.getInfoUsers(req.body.username)
        .then(result => {

            if (result == "") {
                console.log("no existen coincidencias")
                return res.status(StatusCodes.NO_CONTENT).json({
                    statusCode: StatusCodes.NO_CONTENT,
                    statusDescription: 'No Content'
                });
            } else {
                console.log("usuario encontrado");
                if (result[0].pass == req.body.pass) {
                    console.log("password coinciden");
                    res.send(result[0]);
                } else {
                    return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json({
                        statusCode: StatusCodes.NON_AUTHORITATIVE_INFORMATION,
                        statusDescription: 'Non Authoritative Information'
                    });
                }
            }

        })
        .catch(err => {
            res.send(err);
            console.log("error durante el proceso de inicio de sesion");
        })

})

app.listen(process.env.PORT);
console.log(process.env.PORT);