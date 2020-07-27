const fs = require('fs')
const db = require('../data/database')

module.exports = Autos = {
    index:function(req,res){
        let lista =[];
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write('------------------------------------------------------\n')
        res.write('LES PRESENTAMOS LOS AUTOS DE NUESTRAS CONCESIONARIAS:' + ' \n' )
        res.write('------------------------------------------------------\n')
        db.forEach(consecionarias=>{
            consecionarias.autos.forEach(auto =>{
                res.write('\n'  +auto.marca + ' - ' +auto.modelo + ' - ' + auto.color +'\n')
                lista.push(auto.autos)
             })   
        })
        res.write('\n')
        res.write('------------------\n')
        res.write('TOTAL DE AUTOS:'+ lista.length)
        res.write('\n------------------\n')
   res.end();
    }
}

