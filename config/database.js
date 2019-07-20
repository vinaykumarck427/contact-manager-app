const mongoose = require('mongoose')

mongoose.Promise=global.Promise

const CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/contmangr-app-feb"  // "mongodb+srv://vinay427:vinay427@cluster0-xdiwz.mongodb.net/test?retryWrites=true&w=majority"


mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useCreateIndex: true})
	.then(() => {
		console.log('connecting to db')
	})
	.catch(err => {
		console.log(err)
	})

module.exports = {
	mongoose
}