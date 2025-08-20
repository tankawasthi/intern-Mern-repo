const getAllProducts = async (req,res)=>{
    res.status(200).json({msg:"I am get all product funtion"})
}

const getAllProductsTesting = async (req,res)=>{
    res.status(200).json({msg:"I am get all product testing funtion"})
}

module.exports= {getAllProducts, getAllProductsTesting}


