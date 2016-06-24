
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	name: {type:String, required: true, minlength:3},
	_buckets : [{type: Schema.Types.ObjectId, ref: 'Bucket'}],
	created_at: {type: Date, default: Date.now}
});

mongoose.model('User', UserSchema);




