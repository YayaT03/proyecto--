const {Router}=require("express")
const route=Router()
const testCtrl=require('../controllers/test.controllers')

route.get('/listar',testCtrl.listar);
route.post('/Agregar',testCtrl.Agregar);
route.put('/update/:id',testCtrl.update);
route.delete('/delete/:id',testCtrl.delete)







module.exports=route 