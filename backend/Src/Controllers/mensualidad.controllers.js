const mensualidadCtrl = {}
const mensualidadModel = require('../models/mensualidad.models')

mensualidadCtrl.list = async (req, res) => {
    try {
        const mensualidad = await mensualidadModel.find();
        res.json({
            ok: true,
            mensualidad
        });
    } catch (error) {
        res.status(500), json({
            ok: false,
            message: error.message
        })
    }
};

mensualidadCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const mensualidad = await mensualidadModel.findById({ _id: id });
        if (!mensualidad) {
            return res.status(404).json({
                ok: false,
                message: "Mensualidad no encontrada"
            });
        }

        res, json({ ok: true, user });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

mensualidadCtrl.add = async (req, res) => {
    try {
        const { idmensualidad, name1, name2, lastname1, lastname2, fecha, grupo, subnivel, descripcion, cantidad, valorunitario, valortotal } = req.body
        if (!idmensualidad || idmensualidad.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo id mensualidad es requerido y no puede estar vacio"
            })
        }

        const verificar = await mensualidadModel.findOne({ fecha })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El estudiante ya esta registrado con otro usuario"
            });
        }

        const newMensualidad = new mensualidadModel({
            idmensualidad,
            name1,
            name2,
            lastname1,
            lastname2,
            fecha,
            grupo,
            subnivel,
            descripcion,
            cantidad,
            valorunitario,
            valortotal,
        });

        await newMensualidad.save()
        res.json({
            ok: true,
            newMensualidad
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
mensualidadCtrl.update = async (req, res) => {
    try {
        const { id } = req.params

        const mensualidad = await mensualidadModel.findById({ _id: id })

        if (!mensualidad) {
            return res.status(404).json({
                ok: false,
                message: "Mensualidad no encontrada"
            });

        }

        const idmensualidad = req.body.idmensualidad || mensualidad.idmensualidad;
        const name1 = req.body.name1 || mensualidad.name1;
        const name2 = req.body.name2 || mensualidad.name2;
        const lastname1 = req.body.lastname1 || mensualidad.lastname1;
        const lastname2 = req.body.lastname2 || mensualidad.lastname2;
        const fecha = req.body.fecha || mensualidad.fecha;
        const grupo = req.body.grupo || mensualidad.grupo;
        const subnivel = req.body.subnivel || mensualidad.subnivel;
        const descripcion = req.body.descripcion || mensualidad.descripcion;
        const cantidad = req.body.cantidad || mensualidad.cantidad;
        const valorunitario = req.body.valorunitario || mensualidad.valorunitario;
        const valortotal = req.body.valortotal || mensualidad.valortotal;

        const mensualidadUpdate = {
            idmensualidad,
            name1,
            name2,
            lastname1,
            lastname2,
            fecha,
            grupo,
            subnivel,
            descripcion,
            cantidad,
            valorunitario,
            valortotal,
        };
        await mensualidad.updateOne(mensualidadUpdate);
        res.json({
            ok: true,
            message: "mensualidad actualizada",
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}


mensualidadCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const mensualidad = await mensualidadModel.findById({ _id: id });

        if (!mensualidad) {
            return res.status(404).json({
                ok: false,
                message: "mensualidad no encontrada"
            });
        }
        await mensualidad.deleteOne()
        res.json({ ok: true, message: "mensualidad eliminada" });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
};

module.exports = mensualidadCtrl;
