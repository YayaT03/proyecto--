const { Router } = require("express")
//const {param,check } = require('express-validator')
const subnivelCtrl = require("../controllers/subnivel.controller");
//const validarCampos = require('../middleware/Validar');
const route = Router();

route.get('/list', subnivelCtrl.list);
route.get('/id/:id', subnivelCtrl.listid);
route.post('/add', subnivelCtrl.add);
route.put('/update/:id', subnivelCtrl.update);
route.delete('/delete/:id', subnivelCtrl.delete);

module.exports = route