var express = require('express')

var db = require('./src/database.js')
var empRouter = require('./src/routers/empRouter.js')


var app = express()

db.connect();
db.connection.on('open', () => { console.log('connection opened...') })


app.use(express.json()); 
app.use('/employees', empRouter)
console.log('TEST')

app.get('/',(req,res)=>{
    res.send('you are at home page');
})


app.listen(9000, () => {
    console.log("Server started on port 9000 ...")
})



