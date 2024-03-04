const { app } = require(".");
const { connectDb } = require("./config/db");

const PORT=3000;
app.listen(PORT,async ()=>{
    await connectDb();
    console.log(`Connected`);
    console.log("ecommerce api listing on port ",PORT)
})