const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/setups', {
	useNewUrlParser: true, 
	useCreateIndex: true,
	useUnifiedTopology: true 
});

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
  });