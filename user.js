const express = require("express")
const app = express()
const users = [{
    name : "John",
    kidneys:[{
        healthy: false
    }]
}];
app.get("/", function(req , res){
    const johnKidneys = users[0].kidneys
    const numberofKidneys = johnKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length ; i++){
        if(johnKidneys[i].healthy){
            numberofHealthyKidneys = numberofHealthyKidneys+1;

        }
    }
    const numberofUnheathyKidneys = numberofKidneys - numberofHealthyKidneys
  res.json({
    numberofKidneys,
    numberofHealthyKidneys,
    numberofUnheathyKidneys
  }
  )
})
app.listen(3001)