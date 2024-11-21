const productModel = require("../model/productModel");
const mongoose = require('mongoose');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, price, description, model } = req.body;

        // Validate required fields
        if (!name) {
            return res.status(400).send({ error: "Name is required" });
        }
        if (!price || isNaN(price)) {
            return res.status(400).send({ error: "Valid price is required" });
        }

        // Create the product
        const newProduct = await productModel.create(req.body);
        res.status(201).send(newProduct);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).send({ message: `Product with name '${error.keyValue.name}' already exists` });
        }
        res.status(500).send({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        const products = await productModel.find().skip(skip).limit(limit);

        if (products.length === 0) {
            return res.status(404).send({ message: "No products found" });
        }
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const updateProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send(updatedProduct);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const deleteProductById = async (req, res) => {
    const { id } = req.params;


    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getProductById,
    getAllProducts,
    updateProductById,
    deleteProductById
};
