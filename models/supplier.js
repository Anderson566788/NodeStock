import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    contato: Number,
    endereco: String
}, { timestamps: true})

const Supplier = mongoose.model('Supplier',SupplierSchema)

export default Supplier