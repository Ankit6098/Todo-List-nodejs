const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Login = mongoose.model('Login', loginSchema);
module.exports = Login;