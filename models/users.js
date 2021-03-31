const {Schema, model} = require('mongoose');

const userSchema = new Schema ({

    name: String,
    lastname: String,
    username: String,
    pass: String,
    email: String,
    direccion: String,
    id: String,
    age: String,
    
})
module.exports = model('users', userSchema);
