const { Router } = require("express")
const grupoCtrl = require("../controllers/grupo.controller");
const route = Router();

//enlista tdos los usuarios
route.get('/list', grupoCtrl.list);

//muesta usuario por id
route.get('/grupoid/:id', grupoCtrl.listid);

route.post('/add', grupoCtrl.add)

route.put('/update/:id', grupoCtrl.update);

route.delete('/delete/:id', grupoCtrl.delete);

module.exports = route