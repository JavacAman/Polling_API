const mongoose = require('mongoose');
const DB = 'mongodb+srv://pawarsubham438:6aO4JOECgoI7Xu71@cluster0.bemtdzm.mongodb.net/mernstack?retryWrites=true&w=majority';
const connectWithDb = () => {
  mongoose
    .connect(DB,process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((error) => {
      console.log(`DB connection failed`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb
