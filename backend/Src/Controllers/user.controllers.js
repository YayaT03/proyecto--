const userCrtl = {}
const userModel = require('../models/user.model')


userCrtl.list = async (req, res) => {
    try {
        //const limit=parseInt(req.params.limit) || 10;
        //const page=parseInt(req.query.page) || 1;
        //const options={
        // limit,
        // page,

        const users = await userModel.find();
        //const users = await userModel.paginate({},options);
        res.json({
            ok: true,
            users
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

userCrtl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById({ _id: id });
        if (!user) {
            return res.statues(400).json({
                ok: false,
                message: "usuario no encontrado"
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

userCrtl.add = async (req, res) => {
    try {
        const { name, lastname, email, salary } = req.body
        if (!name || name.trim() === "") {
            return res.statues(400).json({
                ok: false,
                message: "el campo name es requerido y no puede estar vacio"
            })
        }

        const verificar = await userModel.findOne({ email })
        if (verificar) {
            return res.json({
                ok: false,
                message: "el correo ya esta registrado con otro usuario"
            });
        }
        const newUser = new userModel({
            name,
            lastname,
            email,
            salary,

        });

        await newUser.save()
        res.json({
            ok: true,
            newUser
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }



}

userCrtl.update = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById({ _id: id })

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: "usuario no encontrado"
            });
        }

        const name = req.body.name || user.name;
        const lastname = req.body.lastname || user.lastname;
        const email = req.body.email || user.email;
        const salary = req.body.salary || user.salary;

        const userUpdate = {
            name,
            lastname,
            email,
            salary,

        };
        await user.updateOne(userUpdate);
        res.json({
            ok: true,
            message: "usuario actualizado",
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }


}

userCrtl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById({ _id: id });

        if (!user) {
            return res.statues(400).json({
                ok: false,
                message: "usuario no encontrado"
            });
        }
        await user.deleteOne()
        res.json({ ok: true, message: "usuario eliminado" });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }

};


module.exports = userCrtl;




