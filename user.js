const aap = require("express");

aap.post("/",function(req,res){
    res.send("jay shree ram");
});

aap.listen(3000);