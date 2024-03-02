const express=require('express');
const router= express.router();

const{Employee}=require('../models/employee') ;
router.get('/api/employees', (req,res)=>{
    Employee.find({},(err,data)=>{
        if(!err){
            res.send(data);}
            else{console.log(err);}
        
    });
});
//save employee
router.post('/api/employees/add', (req,res)=>{
    const emp =new Employee({
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary
    });
     emp.save((err,data)=>{
        res.status(200).json({code:200,message:'Employee Added Successfully',
    addEmployee:data})
     }) ;  
    });
    router.get('/api/employees/:id', (req,res)=>{
        Employee.findById(req.params.id,(err,data)=>{
            if(!err){
                res.send(data);}
                else{console.log(err);}
            
        });
    });
router.put('/api/employees/edit/:id', (req,res)=>{
        const emp ={
            name:req.body.name,
            email:req.body.email,
            salary:req.body.salary
        };
         Employee.findByIdandUpdate(req.params.id,{$set:emp},{new:true},(err,data)=>{
            if(!err){
            res.status(200).json({code:200,message:'Employee Updated Successfully',
        updateEmployee:data})
    }
        else{
            console.log(err);
        }
         });  
        }); 
router.delete('/api/employees/:id', (req,res)=>{
            
             Employee.findByIdandRemove(req.params.id,(err,data)=>{
                if(!err){
                res.status(200).json({code:200,message:'Employee Deleted Successfully',
            DeleteEmployee:data})}
    
        });  
    })
        
module.exports = router;