const product = require("../Model/ProductModel");

// const { Op } = require("sequelize")




/////////   ADD PRODUCT  TO DASHBOARD  MODEL ///////////////

exports.addProducts = async (req, res) => {
    try {
        const { productName, productPrice, category, userId } = req.body;
        console.log('userid', userId)

        console.log("hello:", req.body);
        const Seq = await product.create({ productName, productPrice, category, userId })

        res.json({ success: true, Seq })
        console.log(Seq)
    } catch (error) {
        console.log(error)
    }
}
