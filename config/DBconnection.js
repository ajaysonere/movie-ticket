import mongoose from "mongoose";

const connection = async() => {
   try {
       const conn = await mongoose.connect(process.env.MONGO_URL);
       
       if(!conn){
          console.log(`Failed to connect with DB`);
          process.exit(1)
       }
       
       console.log(`Database connected successfully`);
       
   } catch (error) {
      console.log(`Failed to connect with DB , ${error}`);
      process.exit(1);
   }
}

export default connection;