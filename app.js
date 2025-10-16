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
// we can also give an argument using slah
app.get('/remainder/:a/:b' , function(req , res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    
    res.json({
        answer : a%b
    })
})
app.listen(3005);