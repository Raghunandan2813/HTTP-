const express = require('express')

const app = express();
let count = 0;
function requestCount(){
        count = count+ 1;
        console.log(`Total number of count : ${count}` )
}
app.get('/sum', function(req , res){
    requestCount();
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b);
    
    res.json({
        ans : a+b
    })
})


// we can put as a funtion 
let reqCount = 0

function requestCountIncrease(req , res , next ){
    reqCount= reqCount+1;
    console.log(`Total number of request : ${reqCount}`)
    next();
}


function requestHandler (req , res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a*b
    })
}
app.get('/multiply',requestCountIncrease, requestHandler );

app.listen(3006);

app.get('/divide', requestCountIncrease, requestHandler);

app.use(requestCountIncrease); //there is no need to use write middleware function agian and again

app.get('/subtract', requestHandler);
app.get('/modulo', requestHandler);