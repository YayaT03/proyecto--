const estudiantesCrtl = {}
const estudiantesModel = require('../models/estudiantes.model')


estudiantesCrtl.list = async (req, res) => {
    try {
        //const limit=parseInt(req.params.limit) || 10;
        //const page=parseInt(req.query.page) || 1;
        //const options={
        // limit,
        // page,

        const estudiantes = await estudiantesModel.find();
        //const users = await userModel.paginate({},options);
        res.json({
            ok: true,
            estudiantes
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

estudiantesCrtl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiantes = await estudiantesModel.findById({ _id: id });
        if (!estudiantes) {
            return res.statues(400).json({
                ok: false,
                message: "estudiante no encontrado"
            });
        }
        res.json({ ok: true, user });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

estudiantesCrtl.add = async (req, res) => {
    try {
        const { documentid,name, lastname, email, phonenumber, direction } = req.body
        if (!name || name.trim() === "") {
            return res.statues(400).json({
                ok: false,
                message: "el campo name es requerido y no puede estar vacio"
            })
        }

        const verificar = await estudiantesModel.findOne({ email })
        if (verificar) {
            return res.json({
                ok: false,
                message: "el correo ya esta registrado con otro estudiante"
            });
        }
        const newEstudiante = new estudiantesModel({
            documentid,
            name,
            lastname,
            email,
            phonenumber,
            direction,

        });

        await newEstudiante.save()
        res.json({
            ok: true,
            newEstudiante
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }



}

estudiantesCrtl.update = async (req, res) => {
    try {
        const { id } = req.params
        const estudiantes = await estudiantesModel.findById({ _id: id })

        if (!estudiantes) {
            return res.status(400).json({
                ok: false,
                message: "estudiante no encontrado"
            });
        }

        const documentid = req.body.documentid || estudiantes.documentid;
        const name = req.body.name || estudiantes.name;
        const lastname = req.body.lastname || estudiantes.lastname;
        const email = req.body.email || estudiantes.email;
        const phonenumber = req.body.salary || estudiantes.phonenumber;
        const direction = req.body.direction || estudiantes.direction;

        const estudiantesUpdate = {
            documentid,
            name,
            lastname,
            email,
            phonenumber,
            direction,

        };
        await estudiantes.updateOne(estudiantesUpdate);
        res.json({
            ok: true,
            message: "estudiante actualizado",
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }


}

estudiantesCrtl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiantes = await estudiantesModel.findById({ _id: id });

        if (!estudiantes) {
            return res.statues(400).json({
                ok: false,
                message: "estudiante no encontrado"
            });
        }
        await estudiantes.deleteOne()
        res.json({ ok: true, message: "estudiante eliminado" });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }

};


module.exports = estudiantesCrtl;




