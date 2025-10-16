const express = require('express');

const app = express();

app.use(express.json());

const users=[];  // used for storage
function generateToken() {
    let options = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0','1','2','3','4','5','6','7','8','9'
]

let token = "";
for(i = 0; i<=options.length; i++){
    token = token + options[Math.floor(Math.random() * options.length)]
}
return token;
}
 
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
        if(u.username=== username && u.password===password){
            return true;
        }else{
            return false;
        }
   })
   if(user){
    let token = generateToken();
    user.token = token;
    
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
    let foundUser = null;

    for(i = 0; i<=users.length; i++){
        if(users[i].token===token){
        foundUser = users[i]
        }
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