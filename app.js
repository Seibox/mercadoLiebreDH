const express = require('express');
const app = express();
const path = require('path');
app.listen(3000,function(){
   console.log('Corriendo en el puerto '+port);
});
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('/',function(req,res){
    const rutaCompleta = path.join(__dirname,'/views/home.html');
    res.sendFile(rutaCompleta);
});