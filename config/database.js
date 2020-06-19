const mongoose = require('mongoose');



mongoose.connect(process.env.DATABASE_URL || 'mongodb:/localhost/users', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
  });

  const db = mongoose.connection;

  db.on('connected', function() {
	  console.log(`mongoose connected to: {db.host}:${db.port}`);
  });