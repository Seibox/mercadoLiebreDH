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
app.get('/registro',function(req,res){
    const rutaCompleta2 = path.join(__dirname,'/views/formularioCuenta.html');
    res.sendFile(rutaCompleta2);
});
app.get('/ingreso',function(req,res){
    const rutaCompleta3 = path.join(__dirname,'/views/formularioIngreso.html');
    res.sendFile(rutaCompleta3);
});