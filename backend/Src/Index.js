const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require('./database')

const app = express();

app.set("Port", 4000);

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({origin: "*"}));

app.use("/api/test",require('./routes/test.route'))
app.use("/api/estudiantes",require('./routes/estudiantes.route'))
app.use("/api/acudientes", require('./routes/acudientes.route'))
app.use("/api/profesores",require('./routes/profesores.route'))
app.use("/api/grupos",require('./routes/grupo.route'))

app.listen(app.get("Port"),() => {
    console.log("servidor corriendo por el puerto",app.get("Port"));
});