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
                message: " Usuario no encontrado"
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
        const { genero } = req.body
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
            genero
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
        

        const grupoUpdate = {
            genero,
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