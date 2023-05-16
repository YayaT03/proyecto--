const subnivelCtrl = {}
const subnivelModel = require('../models/subnivel.model')


subnivelCtrl.list = async (req, res) => {
    try {
        const subnivel = await subnivelModel.find();
        res.json({
            ok: true,
            subnivel
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
};

subnivelCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const subnivel = await subnivelModel.findById({ _id: id });
        if (!subnivel) {
            return res.status(404).json({
                ok: false,
                message: " subnivel no encontrado"
            });
        }
       
        res.json({ ok: true, subnivel });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

subnivelCtrl.add = async (req, res) => {
    try {
        const { tipo,  } = req.body
        if (!tipo || tipo.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo tipo es requerido y no puede estar vacio"
            })
        }

        /*const verificar = await subnivelModel.findOne({ email })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El correo ya esta reigistrado con otro usuario"
            });
        }*/

        const newsubnivel = new subnivelModel({
            tipo
        });

        await newsubnivel.save()
        res.json({
            ok: true,
            newsubnivel
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
subnivelCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const subnivel = await subnivelModel.findById({ _id: id })

        if (!subnivel) {
            return res.status(404).json({
                ok: false,
                message: "Usuario no encontrado"
            });
        }


        const tipo = req.body.tipo || subnivel.tipo;
        

        const subnivelUpdate = {
           tipo
        };

        await subnivel.updateOne(subnivelUpdate);
        res.json({
            ok: true,
            message: "Subnivel actualizado"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}
subnivelCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const subnivel = await subnivelModel.findById({ _id: id });

        if (!subnivel) {
            return res.status(404).json({
                ok: false,
                message: "Subnivel no encontrado"
            });
        }

        await subnivel.deleteOne()
        res.json({ Ok: true, message: 'Subnivel Eliminado' });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

module.exports = subnivelCtrl;