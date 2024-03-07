const mongoose=require("mongoose");

module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnidiedTopology:true,

    };
    try{
mongoose.connect(process.env.DB,connectionParams);
console.log("Connected to Databse Successfully");
    }catch(error){
        console.log("Could not connect to our database!");

    }
}