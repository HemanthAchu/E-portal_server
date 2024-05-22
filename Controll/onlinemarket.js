const onlinemark = require('../model/onlinemarket')
exports.addproduct = async (req, res) => {


  console.log("inside add products controller");
  //  console.log(req.body);
  let images = req.file.filename
  const { productName } = req.body
  const { productname, productsubname, totalprice, offer, count } = req.body
  // console.log(productname,productsubname,totalprice,offer,count);
  // console.log(`hii`);
  console.log(images);
  console.log("dgdgd");
  try {
    const addProduct = await onlinemark({
      productname,
      productsubname,
      totalprice,
      offer,
      images,
      count
      

    })
    console.log(addProduct);
    await addProduct.save()
    res.status(200).json(addProduct)
  } catch (err) {
    res.status(401).json(err)
  }

}
exports.getproduct = async (req, res) => {
  console.log("inside getproduct");
  try {
    const result = await onlinemark.find()
    res.status(200).json(result)
  } catch (err) {
    console.log(err);
    res.status(401).json(err)
  }
}

exports.deleteproduct = async (req, res) => {
  const { id } = req.params
  try {
    const deleteitem = await onlinemark.findByIdAndDelete(id)
    res.status(200).json(deleteitem)
  } catch (err) {
    res.status(401).json(err)
  }
  console.log(id);
}
exports.editUserLike = async (req, res) => {
  
  console.log("inside EditUser");
  const { id } = req.params
  console.log(id);
 
  const {productname, productsubname, totalprice, offer, count,coment } = req.body

  try {
    const products=await onlinemark.findById(id)
    // console.log(products.coment.push(coment),123,coment);
  const coments =  products.coment.push(JSON.parse(coment))
   
  console.log( products.coment);
    const result = await onlinemark.findByIdAndUpdate(
      { _id: id },
      { productname, productsubname, totalprice, offer, count, coment:products.coment },
      { new: true })
    res.status(200).json(result)

  } catch (err) {
    console.log(err);
    res.status(401).json(err)
  }
}
exports.deletecoment =async(req,res)=>{
  const {id}=req.params
  console.log('inside DeleteComment');
  console.log(id);
  const {productname, productsubname, totalprice, offer, count,coment } = req.body

  try {
    const products=await onlinemark.findById(id)
    // console.log(products.coment.push(coment),123,coment);
  const coments =  products.coment.pop(JSON.stringify(coment))
   
  console.log( products.coment);
    const result = await onlinemark.findByIdAndUpdate(
      { _id: id },
      { productname, productsubname, totalprice, offer, count, coment:products.coment },
      { new: true })
    res.status(200).json(result)

  } catch (err) {
    console.log(err);
    res.status(401).json(err)
  }
}