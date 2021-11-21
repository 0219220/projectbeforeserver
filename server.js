const express= require("express");//this calls on the express package
const app= express();
//this calls on the superhero package
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.sendFile("index.html");//this is how we call on our webpage to become a live server
});

app.get('/signin1', (req, res)=>{
    var Flights={
        message: "hola "

    }
    
    res.json(Flights);
});











app.listen(5000, ()=>{
    console.log("this is running at port 5000" )
});


