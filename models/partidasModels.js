const mongoose = require("../config/mongo");
const Schema = mongoose.Schema

let partidaSchema = new Schema(
    {
        id:String,
        nombre: String,
        nivel:Number,
        filas: Number,
        columnas: Number,
    },
    {
        timestamps: true,
    }
);

const partidaM = mongoose.model("Partridas", partidaSchema, 'partidas');

module.exports = partidaM;