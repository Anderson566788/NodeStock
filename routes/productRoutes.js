import express from "express"
const router = express.Router()
import Product from "../models/product.js";

router.post('/', async (req, res) => {
    try {
        const newProduct = await new Product(req.body).save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/', async (req, res) => {
    const getProduct = await Product.find().populate("fornecedor")
    res.json(getProduct)
})

router.patch('/:id', async (req, res) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json(updateProduct)
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.json({ message: "Produto removido com sucesso" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

export default router
