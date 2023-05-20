const { Router } = require('express')
const profesoresCtrl = require('../controllers/profesores.controllers');
const route = Router();

route.get('/list', profesoresCtrl.list);
route.get('/listid/:id', profesoresCtrl.listid);
route.post('/add', profesoresCtrl.add);
route.put('/update/:id', profesoresCtrl.update);
route.delete('/delete/:id', profesoresCtrl.delete);

module.exports = route 