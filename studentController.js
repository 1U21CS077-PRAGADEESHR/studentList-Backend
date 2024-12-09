import express, { json } from "express"
import { Student } from "./studentModel.js"
const router=express.Router()

router.get("/",async(req,res)=>{
    try {
        const readstudent=await Student.find()
        return res.status(200).json({
            count:readstudent.length,
            data:readstudent
        })
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const studentId=await Student.findById({_id:req.params.id})
        return res.status(200).json(studentId)

    } catch (error) {
     res.send(500).json({message:"There is no Id like this"})   
    }
})
router.post("/",async(req,res)=>{
    try {
        if(!req.body.rollnumber || !req.body.name  || !req.body.dbms|| !req.body.python|| !req.body.cgpa){
            return res.status(400).json({message:"send all required fields:Title,Author,Content"})
        }
        const newstudent={
            rollnumber:req.body.rollnumber,
            name:req.body.name,
            dbms:req.body.dbms,
            python:req.body.python,
            cgpa:req.body.cgpa
        }
        const student=await Student.create(newstudent)
        return res.status(200).json(student)
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.put("/:id",async(req,res)=>{
    try {
        if(!req.body.rollnumber || !req.body.name  || !req.body.dbms|| !req.body.python|| !req.body.cgpa){

            return res.status(404).send({message:"Send all required feilds:Title,Author,Content"})
        }
        const {id}=req.params
        const result=await Student.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.status(404).json({message:"Student not found"})
        }
        return res.status(200).json({message:"Student has been updated"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const deleteStudent= await Student.deleteOne({_id:req.params.id})
        return res.status(200).json({message:"Student has been Deleted"})
    
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

export default router