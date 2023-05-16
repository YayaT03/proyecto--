const { Router } = require('express')
//const {param, check} = require('express-validator');
const matriculaCtrl = require('../controllers/matricula.controllers');
//const validarCampos = require('../middleware/validar');
const route = Router();

route.get('/list', matriculaCtrl.list);
route.get('/userid/:id', matriculaCtrl.listid);
route.post('/add', matriculaCtrl.add);
route.put('/update/:id', matriculaCtrl.update);
route.delete('/delete/:id', matriculaCtrl.delete);

module.exports = route
