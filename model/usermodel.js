const mongooes =require('mongoose')

const userschema =new mongooes.Schema({

    username:{
        type:String,
        required:true 
     },
     email:{
         type:String,
         required:true,
         unique:true
     },
     password:{
         type:String,
         required:true
     }

})
const users =mongooes.model('users',userschema)
module.exports=users
