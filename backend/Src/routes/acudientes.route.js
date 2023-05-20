const { Router } = require('express');
const acudientesCtrl = require('../controllers/acudientes.controllers');
const route = Router();

route.get('/list', acudientesCtrl.list);
route.get('/listid/:id', acudientesCtrl.listid);
route.post('/add', acudientesCtrl.add);
route.put('/update/:id', acudientesCtrl.update);
route.delete('/delete/:id', acudientesCtrl.delete);

module.exports = route 