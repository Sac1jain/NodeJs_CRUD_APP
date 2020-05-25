let express = require('express')
let Employee = require('../models/employee.js')
let router = express.Router()

router.get('/getEmp',async(req,res)=>{
   try {
    console.log('in emp get router')
    const employee =  await Employee.model.find().sort({'name':1}); 
    res.json(employee)
   } catch (error) {
       console.log(error)
       res.json(error)
   }
})

router.post('/createEmp',async(req,res)=>{
    try {
        let emp = new Employee.model({
            name:req.body[0].name,
            age:req.body[0].age,
            email:req.body[0].email
        })
     console.log(emp)
     
     // use below to save single entity  
     // await emp.save(req.body); 
     // OR use below to  save single or multiple entity array
     const employee = await Employee.model.insertMany([emp]) 
     res.json(await Employee.model.find())
    } catch (error) {
        console.log(error)
        res.json(error)
    }
 })

 router.post('/createEmployees',async(req,res)=>{
    try {
        console.log(req.body)
        let employees = req.body

     // use below to save single entity  
     // await emp.save(req.body); 
     // OR use below to  save single or multiple entity array
     await Employee.model.insertMany(employees) 
     const employee = await Employee.model.find();
     res.json(employee)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
 })

 router.delete('/deleteAllRecoards',async(req,res)=>{
    try {
     Employee.model.db.dropDatabase(()=>{
        res.json(`${Employee.model.db.name} has been deleted successfully`)
     }) 
    } catch (error) {
        console.log(error)
        res.json(error)
    }
 })

module.exports = router