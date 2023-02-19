const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello world!");
})

port = 5050;
app.listen(port , (err)=>{
    if(err) {
        console.error(err);
    }else{
        console.log("listening on port: " + port)
    }
})
