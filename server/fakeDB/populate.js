const mongoose = require('mongoose');
const config = require('../config/dev');
const fakeDB = require('./FakeDB');

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, async () => {
    console.log('Connected to DB');
    console.log('Populating DB...');
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log('End Populating DB...');
});