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
                return res.send({
                    statusCode: 204,
                    statusDescription: 'Usuario no existe'
                });
            } else {
                console.log("usuario encontrado");
                if (result[0].pass == req.body.pass) {
                    console.log("password coinciden");
                    res.send(result[0]);
                } else {
                    return res.send({
                        statusCode: 203,
                        statusDescription: 'Password incorrectas' 
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