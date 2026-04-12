import mongoose from 'mongoose'


export const dbConnection = async(db_url)=>{
   try {
    await mongoose.connect(db_url)
    console.log('DataBase Connected Successfully....')
   } catch (error) {
    console.log('error in connecting the dataBase..',error.message)
   }
} 