import express from "express"
import env from "dotenv"
env.config()
import database from "./config/database.js"
database()
import productRoutes from "./routes/productRoutes.js"
import supplierRoutes from "./routes/supplierRoutes.js"

const app = express()
app.use(express.json())
app.use(productRoutes)
app.use(supplierRoutes)


const port = 3100
app.listen(port, () => console.log(`rodando na porta ${port}`))
