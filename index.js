const express = require("express")
const app = express();
// app.get('/' , function(req , res){
//     res.send("hii")
// })
app.get('/asd' , function(req , res){
    res.send("hii")
})
// app.post('/asd' , function(req , res){
//     res.send("hii from post")
// })
app.get('/' , function(req , res){
    res.send("<b>hii there</b>")
})
app.post('/asd' , function(req , res){
    res.json({
        name: "raghu",
        age: 24,
        id: "AB97CD"
    })
})

app.listen(3000);