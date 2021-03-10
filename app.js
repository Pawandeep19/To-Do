var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
methodOverride=require("method-override");
app.use(methodOverride("_method"));
var mongoose=require("mongoose");
mongoose.connect("mongodb+srv://pawandeep19:youaremypassword@cluster0.qyryo.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true, }).then(()=>{
    console.log("Mongodb is connected");
});
mongoose.set('useFindAndModify', false);
// app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"));
var todoSchema=new mongoose.Schema({
    todoItem:String
});
var todo=mongoose.model("todo",todoSchema);

app.get("/",function(req,res){
    todo.find({},function(err,foundtodo){
        if(err){
            console.log(err);
        } else{
            res.render("todo.ejs",{foundtodo:foundtodo});
        }
    });
});
app.post("/",function(req,res){
    todo.create({
        todoItem:req.body.item
    },function(err,foundtodo){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    });
});

app.delete("/",function(req,res){
    todo.findOneAndRemove({todoItem:req.body.var1},function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    })
})

//listen
app.listen(process.env.PORT || 30003000,function(){
    console.log("server started");
});