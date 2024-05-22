// const multer =require('multer')
// const storage =multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./uploads')
    
//     },
//     filename:(req,file,callback,next)=>{
//         console.log("sedg");
//         console.log(file,190);
//         const filename =`image-${Date.now()}-${file.originalname}`
//     console.log(filename,10);
  
//         callback(null,filename)
//         next()
//     }
    
// })
// const fileFilter =(req,file,callback,next)=>{
//     if(file.mimetype ==="image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
//         callback(null,true)
//     }else{
//         callback(null,false)
//         return callback(new Error("please upload png,jpg,jpeg only"))
//     }
//     next()
// }

// const multerConfig =multer({
//     storage,fileFilter
// })
// module.exports =multerConfig
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },
    filename: (req, file, callback) => {
         const filename = `image-${Date.now()}-${file.originalname}`;
        console.log(filename);
        callback(null, filename);
    }
});

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        callback(null, true);
    } else {
        callback(null, false);
        return callback(new Error("Please upload png, jpg, jpeg only"));
    }
};

const multerConfig = multer({
    storage,
    fileFilter
});

module.exports = multerConfig;