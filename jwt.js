const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const JWT_SECRET ="randomraghuisinindia"
app.use(express.json());

const users=[];  // used for storage

 
app.post('/sign-up', function(req , res){
    const username = req.body.username;
    const password = req.body.password;
    if(users.find(u => u.username=== username)){
            res.json({
                message: "You are logged in !"
            })
    }
    users.push({
        username :username,
        password : password
    })


    res.json({
        message : "You are logged in!"
    })
    console.log(users)

})

app.post('/sign-in', function(req , res){
   const username = req.body.username;
   const password = req.body.password;

 const user = users.find(function(u){
        if(u.username === username && u.password===password){
            return true;
        }else{
            return false;
        }
   })
   if(user){
    let token = jwt.sign({   //convert into token
        username : username
    },  JWT_SECRET);
    // user.token = token;
    
    res.json({
        token: token
    })
}else{
    res.status(403).send({
        message: "Invalid username and password!"
    })
}
console.log(users)
   })

app.get('/me', function(req , res){
    const  token= req.headers.token;
    const decodeInformation = jwt.verify(token , JWT_SECRET);
    const username = decodeInformation.username;
    let foundUser = null;

    for(i = 0; i<=users.length; i++){
        if(users[i].username===username)
        foundUser = users[i]
    }
    if(foundUser){
        res.json({
            username :foundUser.username,
            password :foundUser.password
            })
        
    }else{
        res.json({
            message: "Token invalid!"
        })
    }

    })
app.listen(3003);