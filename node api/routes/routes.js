var express = require('express');
var router = express.Router();
var Employee = require('../model/model.js');
router.get('/', async(request, response,next)=>{
    try{
        let res=await Employee.getEmployees();
         response.json(res);
    }
    catch(err){
        console.error("Error fetching in users from service");

    }
 })
router.post('/', function(req, res){
    var newEmployee = {
        code:req.body.code,
        name: req.body.name,
        email : req.body.email,
        department : req.body.department,
        mobile: req.body.mobile,
        status: req.body.status
    }
     Employee.addEmployee(newEmployee,function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.put('/:_id', function(req, res){
     var update = {
        code:req.body.code,  
        name: req.body.name,
        email : req.body.email,
        department : req.body.department,
        mobile: req.body.mobile,
        status: req.body.status

    }
     Employee.updateEmployee(req.params._id , update, function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.delete('/:_id', function(req, res){
     
     Employee.deleteEmployee(req.params._id ,  function(err,employee){
         if(err) throw err;
         res.json(employee);
     });
 })
 router.get('/:_id', async(request, response,next)=>{
    let empid=req.params._id

     try{
         let res=await Employee.getEmployees();
         response.json(res);
         console.log("Fetched the user with id "+empid);
         response.json(res);
        }
        catch(err){
            console.error("Error fetching the user "+empid);
        }
    
 })
module.exports = router;