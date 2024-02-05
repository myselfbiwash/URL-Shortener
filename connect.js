const mongoose = require('mongoose');
mongoose.set("strictQuery",true);

async function connectToMongoDB(url){
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
}

module.exports = {connectToMongoDB};