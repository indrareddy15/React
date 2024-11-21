const ProductModel = require("../model/productModel");

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const findProductById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id || !isValidObjectId(id)) {
            return res.status(400).send({ message: "Valid product ID is required" });
        }

        const reqProduct = await ProductModel.findById(id);
        if (!reqProduct) {
            return res.status(404).send({ message: `Product with id: ${id} could not be found` })
        }
        req.product = reqProduct
        next()
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(422).json({ message: 'Invalid Product!' });
        }
        res.status(500).json({ message: 'Error getting Product by id', error });
    }

}

module.exports = { findProductById }