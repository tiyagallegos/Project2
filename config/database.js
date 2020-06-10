const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/setups', {
	useNewUrlParser: true, 
	useCreateIndex: true,
	useUnifiedTopology: true 
});