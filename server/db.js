const mongoose = require('mongoose');

const connectDB = async()=>{
    try{

        const conn = await mongoose.connect(
            // 'mongodb://localhost:27017/employee'
                'mongodb+srv://vishsalunke14:vishal123@cluster0.kjy7e.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0'            
        );
        console.log(`mongoDB Connected:`);
    }catch(error){
        console.error(error);
        process.exit(1);
    }

}

module.exports = connectDB;