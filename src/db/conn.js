const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/regdb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
console.log("conection is established");

}).catch(()=>{console.log("Error in establishing connection")});


