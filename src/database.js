let mongoose = require("mongoose");


const server = 'localhost:27017'; 
const database = 'employees';     


class Database {
    constructor() {
      this._connect()
    }
    
  _connect() {
       mongoose.connect(
           `mongodb://${server}/${database}`,
           { useNewUrlParser: true ,useUnifiedTopology: true ,reconnectTries: 5 }
           ).then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }


  module.exports ={
      connect:()=> {return new Database()},
      connection : mongoose.connection
  }