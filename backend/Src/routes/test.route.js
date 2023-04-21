const {Router}=require("express")
const route=Router()
const testCtrl=require('../controllers/test.controllers')

route.get('/listar',testCtrl.listar);







module.exports=route 