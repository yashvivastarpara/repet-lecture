const mongoose=require('mongoose');
let studentschema = new mongoose.Schema({
    name:String,
    password:Number,
    email:String,
})


const schema = mongoose.model("schema",studentschema);

module.exports=schema;