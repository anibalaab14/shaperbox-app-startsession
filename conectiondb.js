require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(db => console.log("Database is conected"))
.catch(err => console.log("Error de conexion"));