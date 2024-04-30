

const wasteReport =require('../model/wasteModel')

exports.addWasteReportController =async(req,res)=>{
    const {username,location,wastetype,wasteId,date,pendingStatus}=req.body
    console.log(username,location,wastetype,wasteId,date);
    console.log('inside  waste controller ');
  let images =req.file.filename
  const usersId =req.payload
  console.log(usersId);
  try{
    const existingwaste =await wasteReport.findOne({wasteId})
    if(existingwaste){
    res.status(406).json("waste report already exist")
    }else{
        console.log("sxdtgdsxgxg");
   const newwaste =new wasteReport({
    username,
    location,
    wastetype,
    usersId,
    wasteId,
    date,
    images,
    pendingStatus
   })
   await newwaste.save()
   res.status(200).json(newwaste)
    }
  }catch(err){
    res.status(401).json(err)
  }
 
}

exports.getwasteController =async(req,res)=>{
 console.log("inside getwasteController");
 const usersId=req.payload
 try{
  const alluserwasteReport =await wasteReport.find({usersId})
  res.status(200).json(alluserwasteReport)
 }catch(err){
    res.status(401).json(err)
 }
}

exports.allwasteController =async(req,res)=>{
    try{
  const allwasteReport =await wasteReport.find()
res.status(200).json(allwasteReport)
    }catch(err){
        res.status(401).json(err)
    }
}
exports.removeWasteController =async(req,res)=>{
  console.log("inside RemovewasteController");
    const {id}=req.params
    console.log(id);
   
    try{
        const deleteWaste =await wasteReport.findOneAndDelete({wasteId:id})
        res.status(200).json(deleteWaste)
    }catch(err){
        res.status(401).json(err)
    }
}
exports.editwasteController=async(req,res)=>{
  console.log("inside edit waste list");
  const {id}=req.params
  const {username,location,wastetype,usersId,wasteId,date,images,pendingStatus}=req.body
  const uploadimage=req.file?req.file.filename:images
  try{
const uploadwastereport =await wasteReport.findOneAndUpdate({wasteId:id},{
  username,location,wastetype,usersId,wasteId,date,images:uploadimage,pendingStatus
},{new:true})
await uploadwastereport.save()
res.status(200).json(uploadwastereport)

  }catch(err){
res.status(401).json(err)
  }
}

