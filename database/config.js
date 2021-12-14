const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            //useCreateIndex:true,
            //useFindAndModify: false
        });

        console.log('*****************Base de datos Online***********');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicial la DB')
    }

}

module.exports = {
    dbConnection
}