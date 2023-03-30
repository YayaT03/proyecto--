const express = require ("express");
const morgan = require ("morgan");
const cors = require ("cors" );

const app = express ();

app.set ("Port", 4000);

app.use (morgan ("dev"));

app.use(express.urlencoded ({extended: true }));
app.use (express.json());

app.use (cors ({origin:"*"}));

app.listen(app.get("Port"), () => {console.log ("iniciando en el puerto " , app.get ("Port"));});