    //require modules
const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT || 8000;

    //set hbs engine
app.set('view engine','hbs');
    //if i replace the views folder
const template_path=path.join(__dirname,'../public/templates/views');
app.set('views',template_path);
console.log(template_path);

    // for use partials
const partials_path=path.join(__dirname,'../public/templates/partials');
hbs.registerPartials(partials_path);
    //run index.html as a static page
app.use(express.static(path.join(__dirname,"../public")));
    //home page
app.get("/",(req,res)=>{
    res.render("index");
});
    //about page
app.get("/about",(req,res)=>{
    res.render("about");
});
    //weather page
app.get("/weather",(req,res)=>{
    res.render("weather");
});
    //error page
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:'Opps! page not found',
    });
});
    //listen port
app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
})