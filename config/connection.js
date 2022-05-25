const {connect, connection} = require('mongoose');

connect('mongodb://localhost/socialNetword',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;