const mongoose = require('mongoose');

const config = require('config');
const dbConfig = config.get('Customer.dbConfig.dbName')

mongoose.connect(dbConfig , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connected');
}).catch(err => {
    console.log(err);
});