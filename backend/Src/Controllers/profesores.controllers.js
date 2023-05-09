const profesoresCrtl = {}
const profesoresModel = require('../models/profesores.model')


profesoresCrtl.list = async (req, res) => {
    try {
        //const limit=parseInt(req.params.limit) || 10;
        //const page=parseInt(req.query.page) || 1;
        //const options={
        // limit,
        // page,

        const profesores = await profesoresModel.find();
        //const users = await userModel.paginate({},options);
        res.json({
            ok: true,
            profesores
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

profesoresCrtl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const profesores = await profesoresModel.findById({ _id: id });
        if (!profesores) {
            return res.statues(400).json({
                ok: false,
                message: "profesor no encontrado"
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

profesoresCrtl.add = async (req, res) => {
    try {
        const { Documentid,name, lastname, email, phonenumber, direction } = req.body
        if (!name || name.trim() === "") {
            return res.statues(400).json({
                ok: false,
                message: "el campo name es requerido y no puede estar vacio"
            })
        }

        const verificar = await profesoresModel.findOne({ email })
        if (verificar) {
            return res.json({
                ok: false,
                message: "el correo ya esta registrado con otro profesor"
            });
        }
        const newProfesor = new profesoresModel({
            Documentid,
            name,
            lastname,
            email,
            phonenumber,
            direction

        });

        await newProfesor.save()
        res.json({
            ok: true,
            newProfesor
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }



}

profesoresCrtl.update = async (req, res) => {
    try {
        const { id } = req.params
        const profesores = await profesoresModel.findById({ _id: id })

        if (!profesores) {
            return res.status(400).json({
                ok: false,
                message: "profesor no encontrado"
            });
        }

        const Documentid = req.body.Documentid || profesores.Documentid;
        const name = req.body.name || profesores.name;
        const lastname = req.body.lastname || profesores.lastname;
        const email = req.body.email || profesores.email;
        const phonenumber = req.body.salary || profesores.salary;
        const direction = req.body.direction || profesores.direction;
        const profesoresUpdate = {
            Documentid,
            name,
            lastname,
            email,
            phonenumber,
            direction

        };
        await profesores.updateOne(profesoresUpdate);
        res.json({
            ok: true,
            message: "profesor actualizado",
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }


}

profesoresCrtl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const profesores = await profesoresModel.findById({ _id: id });

        if (!profesores) {
            return res.statues(400).json({
                ok: false,
                message: "profesor no encontrado"
            });
        }
        await profesores.deleteOne()
        res.json({ ok: true, message: "profesor eliminado" });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }

};


module.exports = profesoresCrtl;