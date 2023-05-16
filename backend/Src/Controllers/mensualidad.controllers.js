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
                message: "Usario no encontrado"
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
        const { fecha, descripcion, cantidad, valorunitario,valortotal } = req.body
        if (!fecha || fecha.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo name es requerido y no puede estar vacio"
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
            fecha,
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
            message: "Mensualidad no encontrado"
        });

    }



    const fecha = req.body.fecha || mensualidad.fecha;
    const descripcion = req.body.descripcion|| mensualidad.descripcion;
    const cantidad = req.body.cantidad || mensualidad.cantidad;
    const valorunitario = req.body.valorunitario || mensualidad.valorunitario;
    const valortotal = req.body.valortotal || mensualidad.valortotal;

    const mensualidadUpdate = {
        fecha,
        descripcion,
        cantidad,
        valorunitario,
        valortotal,
    };
    await mensualidad.updateOne(mensualidadUpdate);
    res.json({
        ok: true,
        message: "mensualidad actualizado",
    });
    }catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}


    mensualidadCtrl.delete = async (req, res) => {
        try {
            const { id } = req.params;
            const mensualidad= await mensualidadModel.findById({ _id: id });

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
