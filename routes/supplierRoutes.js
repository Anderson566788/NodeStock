import express from "express"
const router = express.Router()
import Supplier from "../models/supplier.js"

router.post('/supplier', async (req, res) => {
    try {
        const newSupllier = await new Supplier(req.body).save()
        res.status(201).json(newSupllier)
    } catch (err) {
        res.status(400).json({ error: err.message })

    }
})

router.get('/supplier', async (req, res) => {
    try {
        const getSupplier = await Supplier.find()
        res.json(getSupplier)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.get('/supplier/:id', async (req, res) => {
    try {
        const getSupplierById = await Supplier.findById(req.params.id)
        res.status(200).json(getSupplierById)
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.patch('/supplier/:id', async (req, res) => {
    try {
        const updateSupplier = await Supplier.findByIdAndUpdate(req.params.id, req.body)
        res.json(updateSupplier)
    } catch (err) {
        res.json(400).json({ error: err.message })
    }
})
router.delete('/supplier/:id', async (req, res) => {
    try {
        const deleteSupplier = await Supplier.findByIdAndDelete(req.params.id)
        res.json({ message: "Produto removido com sucesso" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

export default router