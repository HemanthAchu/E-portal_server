const { type } = require('@testing-library/user-event/dist/type')
const mongooes=require('mongoose')

const wasteSchema =new mongooes.Schema({
    
    username:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    wastetype:{
        type:String,
        required:true
    },
    usersId:{
        type:String,
        required:true
    },
    wasteId:{
        type:String,
        required:true,
        unique:true
    }
    ,
    date:{
        type:String,
        required:true
    },
    images:{
        type:String,
    },
    pendingStatus:{
        type:Boolean,
        required:true
    }
})
const wastes =mongooes.model("wastes",wasteSchema)
module.exports=wastes