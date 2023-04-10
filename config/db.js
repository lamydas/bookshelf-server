const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    // await mongoose.connect('mongodb://127.0.0.1:27017', {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true
    // });

    // console.log('MongoDB Connected...');
    await mongoose.connect("mongodb+srv://Lamydas:iordgtbmaOOLD7vB@cluster0.f0bmsgi.mongodb.net/?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCrearedIndex: true,
      useFindAndModify: false
  }).then( ()=> console.log("connected to mongodb real time"))
  .catch((error)=> console.log("ERROR:",JSON.stringify(error)))       

    
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;