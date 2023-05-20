const { Router } = require('express')
const mensualidadCtrl = require('../controllers/mensualidad.controllers');
const route = Router();

route.get('/list', mensualidadCtrl.list);
route.get('/userid/:id', mensualidadCtrl.listid);
route.post('/add', mensualidadCtrl.add);
route.put('/update/:id', mensualidadCtrl.update);
route.delete('/delete/:id', mensualidadCtrl.delete);

module.exports = route