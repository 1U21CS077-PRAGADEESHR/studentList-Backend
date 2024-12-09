import mongoose from "mongoose";
const schema=mongoose.Schema({
    rollnumber:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:false
    }
    ,
    dbms:{
        type:String,
        required:true
    },
    python:{
        type:String,
        required:true
    },
    cgpa:{
        type:String,
        required:true
    }
    
  
},
{
    timestamps:true,
})

export const Student= mongoose.model("Students",schema)