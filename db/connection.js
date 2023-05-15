// connection to atlas
const mongoose=require('mongoose')
const DB=process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Mongoose atlas connected succesfully');
}).catch((err)=>{
    console.log(err);
})