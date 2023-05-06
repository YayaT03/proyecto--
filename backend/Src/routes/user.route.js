const { Router } = require('express')

const userCtrl = require('../controllers/user.controllers');

const route = Router();

route.get('/list', userCtrl.list);
route.get('/listid/:id', userCtrl.listid);
route.post('/add', userCtrl.add);
route.put('/update/:id', userCtrl.update);
route.delete('/delete/:id', userCtrl.delete);





module.exports = route