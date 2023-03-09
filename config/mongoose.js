// require mongoose
const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://127.0.0.1:27017/todoListDB');

// acquire the connection (to check if it is successful)
const db = mongoose.connection;
// check for error
db.on('error', console.error.bind(console, 'connection error:'));
// once connection is open, log to console
db.once('open', function() {
    console.log('connected to database');
});