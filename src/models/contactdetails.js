const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema(
{
firstName: {type:String, required :true},
lastname: {type:String, required :true},
fromEmail: {type:String, required :true},
phoneNumber: {type:Number, required :true},
spec: {type:String, required :true},
Age: {type:Number, required :true},
comments: {type:String, required :true}
} 
)

const Register = new mongoose.model("studtable", clientSchema);
module.exports = Register;