const complaintss = require('../model/complaintModels')

exports.addComplaintController = async (req, res) => {
    console.log("inside conplaints  controller");
    const { username, subject, complaint, complaintId, pendingStatus } = req.body
    let images = req.file.filename
    console.log(images);
    const userId = req.payload
    console.log(userId);
    console.log(username, subject, complaint, userId, complaintId, pendingStatus);
    try {
        const existComplaint = await complaintss.findOne({ complaintId })

        if (existComplaint) {
            res.status(406).json("Complaints already exist")
        } else {
            const newComplaints = new complaintss({
                username,
                subject,
                complaint,
                images,
                userId,
                complaintId,
                pendingStatus
            })
            await newComplaints.save()
            res.status(200).json(newComplaints)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.getUserComplaints = async (req, res) => {
    console.log('inside getusercomplaints');


    const userId = req.payload
    console.log(userId);
    try {
        const allUserComplaints = await complaintss.find({ userId })
        console.log(allUserComplaints);
        res.status(200).json(allUserComplaints)
    } catch (err) {
        res.status(401).json(err)
    }
}
exports.removeUserComplaints = async (req, res) => {
    console.log("inside controller");
    const { id } = req.params
    try {
        const removedUserComplaint = await complaintss.findOneAndDelete({ complaintId: id })
        res.status(200).json(removedUserComplaint)
    } catch (err) {

    }
}

exports.getAllComplaints = async (req, res) => {



    try {
        const allComplaints = await complaintss.find()
        res.status(200).json(allComplaints)
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.editComplaints = async (req, res) => {
    console.log("inside edit project");
    const { id } = req.params
    console.log(id);


    const { username, subject, complaint, complaintId, pendingStatus, images, userId } = req.body
    console.log(pendingStatus);
    console.log(userId);
    const uploadimage = req.file ? req.file.filename : images
    console.log(uploadimage);
    try {
   
        const updaateComplaints = await complaintss.findOneAndUpdate({complaintId:id},{
            username, subject, complaint, images: uploadimage, userId, complaintId, pendingStatus
        }, { new: true })
      
        await updaateComplaints.save()
        res.status(200).json(updaateComplaints)


    } catch (err) {
        console.log("dsgvsg");
        res.status(401).json(err)
    }
}