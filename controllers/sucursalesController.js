let database = require('../data/database');

const controller ={
index: (req,res) => {
res.write('------------------------------\n')
res.write('SUCURSALES DE LA CONCESIONARIA' + '\n')
res.write('------------------------------\n')
res.write('\n')
database.forEach(concesionaria => {
res.write(concesionaria.sucursal + '\n')
res.write(concesionaria.direccion + '\n')
res.write(concesionaria.telefono + '\n' + '\n')

})

res.end()
},
sucursal: (req,res) => {
    let sucld = req.params.id
    let totalAutos = []
    database.forEach(concesionaria=>{
    if(req.params.id.toLowerCase() == concesionaria.sucursal.toLowerCase()){

    res.write('------------\n')
    res.write(concesionaria.sucursal + '\n')
    res.write('------------\n\n')
    res.write(concesionaria.direccion + '\n\n')
    res.write(concesionaria.telefono + '\n\n')

    res.write('-----------------------------------\n')
    res.write('AUTOS DISPONIBLES EN NUESTRO LOCAL' + '\n')
    res.write('-----------------------------------\n\n')
    concesionaria.autos.forEach(auto => {
        totalAutos.push(auto.autos)
    res.write(auto.marca + '\n')
    res.write(auto.modelo + ' - ' + auto.anio + '\n')
    })
    }
})
    res.write('\n-------------------\n')
    res.write('TOTAL DE AUTOS: ' + totalAutos.length)
    res.write('\n-------------------\n')
res.end()
}


    }







module.exports = controller 