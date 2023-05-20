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
        const { genero, nivel } = req.body
        if (!genero || genero.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo genero es requerido y no puede estar vacio"
            })
        }
        const verificar = await subnivelModel.findOne({ genero })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El subnivel ya esta registrado "
            });
        }

        const newsubnivel = new subnivelModel({
            nivel,
            genero,
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
                message: "subnivel no encontrado"
            });
        }


        const nivel  = req.body.nivel || subnivel.nivel;
        const genero = req.body.genero || subnivel.genero;

        const subnivelUpdate = {
           nivel,
           genero,
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