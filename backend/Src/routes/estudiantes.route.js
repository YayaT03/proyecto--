const { Router } = require('express')

const estudiantesCtrl = require('../controllers/estudiantes.controllers');

const route = Router();

route.get('/list', estudiantesCtrl.list);
route.get('/listid/:id', estudiantesCtrl.listid);
route.post('/add', estudiantesCtrl.add);
route.put('/update/:id', estudiantesCtrl.update);
route.delete('/delete/:id', estudiantesCtrl.delete);





module.exports = route 