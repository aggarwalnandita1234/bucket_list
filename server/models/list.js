
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ListSchema = new mongoose.Schema({
	title: {type:String, required: true, minlength:3},
	description: {type:String, required: true, minlength:8},
	pending: {type:Number},
	done:{type:Number},
	tagged_user: String,
	_user : String,
	created_at: {type: Date, default: Date.now}
	
});

mongoose.model('List', ListSchema);