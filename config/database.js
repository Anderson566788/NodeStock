import mongoose from "mongoose"

export default async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.idvpznw.mongodb.net/database?`)
        console.log("Conectado ao MongoDB")
        return db
    } catch (error) {
        console.log("Erro ao se conectar ao MongoDB")
    }
}
