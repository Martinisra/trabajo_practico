let database = require('../data/database');

const controller = {
    index:function(req,res){
        res.write('---------------------------- \n')
    res.write('Bienvenidos al Home \n');
    res.write('------------------------------- \n\n')
    res.write('NUESTRAS SUCURSALES SON: \n\n')
    database.forEach(concesionaria=>{
        res.write(concesionaria.sucursal + '\n')
    })
    res.end()
    }
}
module.exports = controller
