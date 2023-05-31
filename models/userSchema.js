const mongoose=require('mongoose')

const registerschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    score:{
        type:Array,
        
    },
    last_score:{
        type:Number,
    }
    
})

const userregister=new mongoose.model('userregister',registerschema)

module.exports = userregister