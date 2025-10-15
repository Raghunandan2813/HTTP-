const express = require("express");
const app = express();

app.get('/sum' , function(req ,res){
        const a =parseInt( req.query.a);
        const b = parseInt(req.query.b);
    res.json({
        ans: a+b
    })
})


app.get('/sub' , function(req , res){
    const a = parseInt(req.query.a);
    const b= parseInt(req.query.b);
    res.json({
        ans : a-b
    })    

})


app.get('/mul' , function(req , res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans : a*b,
        name : "hello"
    })

})


app.get('/div', function(req , res){
        const a  = parseInt(req.query.a)
        const b = parseInt(req.query.b);
        res.json({
            ans :a/b,
            age : "12"

        })
})

app.listen(3005);