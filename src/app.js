const express = require("express");
const app = express();
const port = process.env.PORT || 4000
require("./db/conn.js")
const hbs= require ("hbs");
const path= require ("path");

const Register= require("./models/contactdetails.js");
console.log(path.join(__dirname));
const static_path = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", viewspath);
hbs.registerPartials(partialspath);

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/aboutus",(req,res)=>{
    res.render("aboutus");
})
app.get("/index",(req,res)=>{
    res.render("index");
})
app.get("/delhi",(req,res)=>{
    res.render("delhi");
})
app.get("/jaipur",(req,res)=>{
    res.render("jaipur");
})
app.get("/agra",(req,res)=>{
    res.render("agra");
})
app.get("/mumbai",(req,res)=>{
    res.render("mumbai");
})
app.get("/hyderabad",(req,res)=>{
    res.render("hyderabad");
})
app.get("/vishakapatnam",(req,res)=>{
    res.render("vishakapatnam");
})
app.get("/andaman",(req,res)=>{
    res.render("andaman");
})
app.get("/ladakh",(req,res)=>{
    res.render("ladakh");
})
app.get("/contactus",(req,res)=>{
    res.render("contactus");
})
app.get("/akshardam",(req,res)=>{
    res.render("akshardam");
})
app.get("/amberfort",(req,res)=>{
    res.render("amberfort");
})
app.get("/attractions",(req,res)=>{
    res.render("attractions");
})
app.get("/cellularjail",(req,res)=>{
    res.render("cellularjail");
})
app.get("/charminar",(req,res)=>{
    res.render("charminar");
})
app.get("/elephanta",(req,res)=>{
    res.render("elephanta");
})
app.get("/fatehpuri",(req,res)=>{
    res.render("fatehpuri");
})
app.get("/golconda",(req,res)=>{
    res.render("golconda");
})
app.get("/havelock",(req,res)=>{
    res.render("havelock");
})
app.get("/indiagate",(req,res)=>{
    res.render("indiagate");
})
app.get("/karnala",(req,res)=>{
    res.render("karnala");
})
app.get("/lehpalace",(req,res)=>{
    res.render("lehpalace");
})
app.get("/nahagarh",(req,res)=>{
    res.render("nahagarh");
})
app.get("/ramakrishna",(req,res)=>{
    res.render("ramakrishna");
})
app.get("/submarine",(req,res)=>{
    res.render("submarine");
})
app.get("/tajmahal",(req,res)=>{
    res.render("tajmahal");
})

app.use(express.urlencoded({extended:false}));
app.post("/contactus", async(req,res)=>{
   
     try{
          const clientRecord = new Register({
             firstName : req.body.firstName,
             lastname : req.body.lastname,
             fromEmail : req.body.fromEmail,
             phoneNumber : req.body.phoneNumber,
             spec : req.body.spec,
             Age: req.body.Age,
             comments : req.body.comments
         })

        const regstatus = await clientRecord.save();
        res.render("index");
     }
     catch(e)
       {
       res.status(400);
          res.send(e);
       }
//console.log(req.body)
 })

app.listen(3000, ()=> {
   const querry = console.log("server is listening to 3000 port");
})