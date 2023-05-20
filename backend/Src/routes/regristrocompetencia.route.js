const { Router } = require('express')
const registrocompetenciaCtrl = require('../controllers/acudientes.controllers');
const route = Router();

route.get('/list', registrocompetenciaCtrl.list);
route.get('/listid/:id', registrocompetenciaCtrl.listid);
route.post('/add', registrocompetenciaCtrl.add);
route.put('/update/:id', registrocompetenciaCtrl.update);
route.delete('/delete/:id', registrocompetenciaCtrl.delete);

module.exports = route 