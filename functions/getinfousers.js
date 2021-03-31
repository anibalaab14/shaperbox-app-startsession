
const userSchema = require('../models/users.js');

const getInfoUsers = async (user) => {
      
    try {
        const result = await userSchema.find({username: user });
        return result 
    } catch (err) {
        console.err(err);
        throw err;
    }

}
module.exports = {getInfoUsers};