const mongoose = require("mongoose");
// Singleton Patten

const url = 'mongodb+srv://admin:root@testnodejsdb.h8lpjj0.mongodb.net/?retryWrites=true&w=majority';
class Database {
  constructor() {
    this.connect();
  }
  
  // New Code Connect test API
  connect(typeDB = "MongoDB") {
    mongoose
      .connect(url)
      .then(console.log('\x1b[32m%s\x1b[0m',`Connect ${typeDB} Successfully`))
      .catch((err) => console.log(err));
  }
  


  // Old code
  // connect(typeDB = "MongoDB") {
  //   mongoose
  //     .connect(process.env.MONGO_URI, { maxPoolSize: 50 })
  //     .then(console.log(`Connect ${typeDB} Successfully`))
  //     .catch((err) => console.log(err));
  // }

  // Initialize DB if not initialized
  static getInstance() {
    if (!this.instance) this.instance = new Database();
    return this.instance;
  }
}

const instanceDB = Database.getInstance();
module.exports = instanceDB;
