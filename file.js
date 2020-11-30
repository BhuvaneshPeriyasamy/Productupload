var mongoose = require('mongoose');
var model = require("./model");
var fs = require('fs');
port=process.env.PORT||3000;
const db="mongodb://localhost:27017/vegportal";
mongoose.connect(db).then(
    ()=>{console.log('Connected with MongoDB');},
    (err)=>{console.log(err)}
);

var folder ="./img/";

nameandPrice=[{Name:"Green Chillie",Price:32},{Name:"Beetroot",Price:65}] //add name and price as in the order of the image that you have uploaded (better name your img filr 1,2,3, etc).

fs.readdir(folder,function(err,imgfile)
{
    imgfile.forEach(x=>{
    for(let item of nameandPrice)
    {
    var datamodel = new model({
        name:item.Name,
        price:item.Price,
        img : convert(folder+x)
    });
    console.log(datamodel);
    datamodel.save(function(err,data)
    {
    if(err) console.log(err)

    console.log(data);
    });

    }
    })
    
});


function convert(src)
{
    return fs.readFileSync(src).toString("base64");
}