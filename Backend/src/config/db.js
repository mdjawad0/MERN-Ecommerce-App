const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://Jawad:jawad123@cluster0.zsnblev.mongodb.net/ShopEasy?retryWrites=true&w=majority'
const connectDb=()=>{
    
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}