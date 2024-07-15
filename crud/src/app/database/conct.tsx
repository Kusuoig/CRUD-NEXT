import mongoose, { connection } from 'mongoose';

const MONGO_URL = "mongodb+srv://Kuuso:<gokussj3dios>@next-crud.beswpzt.mongodb.net/?retryWrites=true&w=majority&appName=Next-crud"



const connectMongo = async ()=>{
    try{
       const {connection} = await mongoose.connect(MONGO_URL)

        if (connection.readyState == 1 ) {
            console.log("Database conected")
            
        }
    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;