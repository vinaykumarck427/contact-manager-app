const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContactSchema = new Schema({
	userName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: Number,
		required: true
	},
	user:{
		type:Schema.Types.ObjectId,
		ref:'User'
	}
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
