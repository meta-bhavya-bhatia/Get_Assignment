const express=require('express');
const app=express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/metaParking.html');
});
app.listen(5000,()=>{
    console.log("Serven Listen on 5000");
});