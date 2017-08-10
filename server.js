const 
	express   = require('express'),
	bodyParser= require('body-parser'),
	mongoose  = require('mongoose'),
	app=express();

	//db connection ..
	mongoose.connect("mongodb://localhost/crud");

	let PostModel=mongoose.model("PostModel",mongoose.Schema({
         title:{
         	type:String,
         	required:true
         },
         message:
         {
         	type:String,
         	required:true
         },
         published:
         {
         	type:String,
         	default:Date.now
         }
	},{collection:"post"}))

//static client dir
    app.use(express.static(__dirname+"/client"));
   
   // body parser init for front end request
   app.use(bodyParser.urlencoded({"extended":false}))
   app.use(bodyParser.json())

   // app running port 
    app.listen(3000);
    console.log("Server listening on port 3000");  