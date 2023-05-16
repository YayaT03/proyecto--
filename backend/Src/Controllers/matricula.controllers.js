const matriculaCtrl = {}
const matriculaModel = require('../models/matricula.models')

  matriculaCtrl.list = async (req, res) => {
    try {
        const matricula = await matriculaModel.find();
        res.json({
            ok: true,
            matricula
        });
    } catch (error) {
        res.status(500), json({
            ok: false,
            message: error.message
        })
    }
};

  matriculaCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const matricula = await matriculaModel.findById({ _id: id });
        if (!matricula) {
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

  matriculaCtrl.add = async (req, res) => {
    try {
        const { estudiante, acudiente, grupo, subnivel } = req.body
        if (!estudiante || estudiante.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo name es requerido y no puede estar vacio"
            })
        }

        const verificar = await matriculaModel.findOne({ estudiante })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El estudiante ya esta registrado con otro usuario"
            });
        }

        const newMatricula = new matriculaModel({
            estudiante,
            acudiente,
            grupo,
            subnivel,
        });

        await newMatricula.save()
        res.json({
            ok: true,
            newMatricula
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
 matriculaCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
    
    const matricula = await matriculaModel.findById({ _id: id })

    if (!matricula) {
        return res.status(404).json({
            ok: false,
            message: "Matricula no encontrado"
        });

    }



    const estudiante = req.body.estudiante || matricula.estudiante;
    const acudiente = req.body.acudiente|| matricula.acudiente;
    const grupo = req.body.grupo || matricula.grupo;
    const subnivel = req.body.subnivel || matricula.subnivel;

    const matriculaUpdate = {
        estudiante,
        acudiente,
        grupo,
        subnivel,
    };
    await matricula.updateOne(matriculaUpdate);
    res.json({
        ok: true,
        message: "matricula actualizado",
    });
    }catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}


    matriculaCtrl.delete = async (req, res) => {
        try {
            const { id } = req.params;
            const matricula = await matriculaModel.findById({ _id: id });

            if (!matricula) {
                return res.status(404).json({
                    ok: false,
                    message: "matricula no encontrada"
                });
            }
            await matricula.deleteOne()
            res.json({ ok: true, message: "matricula eliminada" });
        } catch (error) {
            res.status(500).json({
                ok: false,
                message: error.message,
            });
        }
    };

    module.exports = matriculaCtrl;
