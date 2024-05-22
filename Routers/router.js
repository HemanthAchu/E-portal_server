const express =require('express')
const router =new express.Router()
const usercontrol =require('../Controll/userControl')
const fileComplaimts =require('../Controll/complaintController')
const wasteReport =require('../Controll/wasteReport')
 const jwtfile =require('../Middlewares/jwtMiddleware')
 const multercong =require('../Middlewares/multerMiddleware')
 const onlinemarket =require('../Controll/onlinemarket')
router.post('/register',usercontrol.register)
router.post('/login',usercontrol.login)
router.post('/filecomplaint',jwtfile,multercong.single('images'),fileComplaimts.addComplaintController)
router.get('/userComplaint',jwtfile,fileComplaimts.getUserComplaints)
router.post('/wasteReports',jwtfile,multercong.single('images'),wasteReport.addWasteReportController)
router.get('/userWastereport',jwtfile,wasteReport.getwasteController)
router.delete('/removewaste/:id',jwtfile,wasteReport.removeWasteController)
router.delete('/removeComplaint/:id',jwtfile,fileComplaimts.removeUserComplaints)
router.get('/allcomplaints',fileComplaimts.getAllComplaints)

router.get('/allwasteReport',wasteReport.allwasteController)
router.put('/editComplaint/:id',multercong.single('images'),fileComplaimts.editComplaints)
router.put('/editwaste/:id',multercong.single('images'),wasteReport.editwasteController)
router.post('/onlinemarket',multercong.single('images'),onlinemarket.addproduct)
router.get('/onlines',onlinemarket.getproduct)
router.delete('/deleteitem/:id',onlinemarket.deleteproduct)
router.put('/editUser/:id',onlinemarket.editUserLike)
router.delete('/deleteComent/:id',onlinemarket.deletecoment)
module.exports=router