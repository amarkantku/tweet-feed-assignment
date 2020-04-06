const mongoose = require('mongoose');
const option = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
}

const connectToMongoDB = async () => {
    mongoose.Promise = await global.Promise;
    mongoose.connect(process.env.MONGODB_URI, option)
        .then(() => console.log('MongoDB Connected...'))
        .catch((err) => {
            console.error('Failed to connect to mongo on startup - reconnecting in 5 sec', err);
            setTimeout(connectToMongoDB, 5000);
        });
};

mongoose.connection.on('connected', () => { console.log('Mongoose connected') });
mongoose.connection.on('disconnected', () => { console.log('Mongoose default connection disconnected') });
process.on('SIGINT', () => {  
	mongoose.connection.close(() => { 
    	console.log('Mongoose default connection disconnected through app termination'); 
    	process.exit(0); 
  	}); 
}); 

(async () => {
    await connectToMongoDB();
})();

module.exports = mongoose;
