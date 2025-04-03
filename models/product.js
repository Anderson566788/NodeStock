import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: String,
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true },
    fornecedor: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
    validade: { type: Number }
}, { timestamps: true })

const Product = mongoose.model('Product', ProductSchema)

export default Product