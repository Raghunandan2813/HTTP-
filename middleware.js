const express = require("express")
const bodyParser = require("body-parser") // it is externally available middleware
const app = express();
app.use(bodyParser.json())


app.post('/sum', function(req , res){
    console.log(req.body);
     const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans : a + b
    });
});

app.listen(3002);