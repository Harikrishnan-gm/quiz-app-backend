const register=require('../models/userSchema')

exports.registeruser= async (req,res) =>{
    const {email,name,password,score} = req.body
    try{
        const details= await register.findOne({email})
        if(details){
            res.status(403).json('Account already exists')
        } 
        else{
            const newuser= new register({
                email,name,password,score
            })
            await newuser.save()
            res.status(200).json("User Account created")
        }
    }
    catch(err){
        res.status(403).json(err)
    }

} 
exports.login=async(req,res)=>{
    const {email,password,score} = req.body
    try{
        const details= await register.findOne({email})
        if(!details){
            res.status(403).json('Matching records not found')
        } 
        else{
            // console.log(details);
            // console.log(score);
            result="login success"
            const array=details.score
            array.push(score)
            res.status(200).json(details)

            // save after push
            details.save()
        }
    }
    catch(err){
        res.status(403).json(err)
    }

}
exports.Top=async(req,res)=>{
    try{
        // const details=await register.find({}).sort({Math(score)})
        const details=await register.aggregate([
            
            {$sort:{"score":-1}}
          ])
        res.status(200).json(details)
    }
    catch(err){
        res.status(403).json(err)
    }
}