 const mongooes =require('mongoose')

 mongooes.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log('mongoodb atlasn connetsed with index.js');
    }
 ).catch(err=>{
    console.log(err);
    console.log("connection failed");
 })
 
//  const mongoose =require('mongoose')
// mongoose.connect(process.env.CONNECTION_STRING).then(
//     result=>{
//         console.log("Mongo Atlas connected with Pfserver");
//     }
// ).catch(err=>{
//     console.log(err);
//     console.log("Connection Failed !!!");
// })