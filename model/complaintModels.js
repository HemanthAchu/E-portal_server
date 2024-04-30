const mongooes =require('mongoose')

const complaintSchema = new mongooes.Schema({
    username:{
      type:String,
      required:true
    },
    subject:{
      type:String,
      required:true
      
    },
    complaint:{
      type:String,
      required:true
    },
    images:{
      type:String
      
    },
    userId:{
          type:String,
          required:true
      },
    complaintId:{
      type:String,
      required:true,
      unique:true
    },
    pendingStatus:{
      type:Boolean,
      required:true
    }
  })
  const complaints = mongooes.model("complaints",complaintSchema)
  module.exports = complaints