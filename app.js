const express = require('express');

const app = express();

app.listen(3030,()=>console.log("El servidor esta funcionando en el puerto 3030"))

const homeRoute = require('./routes/home');
const sucursalesRoute = require('./routes/sucursales')
const autosRoute = require('./routes/autos')

app.use('/autos',autosRoute)

app.use('/',homeRoute)

app.use('/sucursales',sucursalesRoute);