const grupoCtrl = {}
const grupoModel = require('../models/grupo.model')


grupoCtrl.list = async (req, res) => {
    try {
        const grupos = await grupoModel.find();
        res.json({
            ok: true,
            grupos
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
};

grupoCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const grupo = await grupoModel.findById({ _id: id });
        if (!grupo) {
            return res.status(404).json({
                ok: false,
                message: " grupo no encontrado"
            });
        }
       
        res.json({ ok: true, grupo });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

grupoCtrl.add = async (req, res) => {
    try {
        const { genero,profesorname1,profesorname2,profesorlastname1,profesorlastname2,cantidadestudiantes } = req.body
        if (!genero || genero.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo genero es requerido y no puede estar vacio"
            })
        }

        /*const verificar = await grupoModel.findOne({ email })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El correo ya esta reigistrado con otro usuario"
            });
        }*/

        const newgrupo = new grupoModel({
            genero,
            profesorname1,
            profesorname2,
            profesorlastname1,
            profesorlastname2,
            cantidadestudiantes,
        });

        await newgrupo.save()
        res.json({
            ok: true,
            newgrupo
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
grupoCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const grupo = await grupoModel.findById({ _id: id })

        if (!grupo) {
            return res.status(404).json({
                ok: false,
                message: "Grupo no encontrado"
            });
        }


        const genero = req.body.genero || grupo.genero;
        const profesorname1 = req.body.profesorname1 || grupo.profesorname1;
        const profesorname2 = req.body.profesorname2 || grupo.profesorname2;
        const profesorlastname1 = req.body.profesorlastname1 || grupo.profesorlastname1;
        const profesorlastname2 = req.body.profesorlastname2 || grupo.profesorlastname2;
        const cantidadestudiantes = req.body.cantidadestudiantes || grupo.cantidadestudiantes;

        const grupoUpdate = {
            genero,
            profesorname1,
            profesorname2,
            profesorlastname1,
            profesorlastname2,
            cantidadestudiantes,
        };

        await grupo.updateOne(grupoUpdate);
        res.json({
            ok: true,
            message: "grupo actualizado"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}
grupoCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const grupo = await grupoModel.findById({ _id: id });

        if (!grupo) {
            return res.status(404).json({
                ok: false,
                message: "Grupo no encontrado"
            });
        }

        await grupo.deleteOne()
        res.json({ Ok: true, message: 'Grupo Eliminado' });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

module.exports = grupoCtrl;