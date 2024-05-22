
const mongooes =require("mongoose")

const onlineSchema =new mongooes.Schema({
    productname:{
        type:String,
        required:true
      },
      productsubname:{
        type:String,
        required:true
      },
      totalprice:{
        type:String,
        required:true
      },
      offer:{
        type:String,
        required:true
      },
      images:{
        type:String,
        required:true
       
      },
      count:{
      type:Array,
      required:true
      },
      coment:{
        type:Array,
        required:true
      }
})
const onlinemarket =mongooes.model("onlinemarket",onlineSchema)
module.exports=onlinemarket