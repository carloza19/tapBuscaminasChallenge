const mongoose = require("mongoose");


mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{useNewUrlParser: true},
    function (error){
        if (error){
            throw error;
        }else{
            console.log('Conectado a la base de datos');
        }
    });
module.exports = mongoose;