const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', require('./app/routes'))
const mysql = require("mysql");
const  con = mysql.createConnection({
  host: "localhost",
  user: "robot",
  password: "1234",
  database: "DIPUTADOS",
});

const gatDataSensor = ({req,res}) => {
  con.query("select * from datasensor", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
app.get("/inicio", (req,res) => {
    gatDataSensor({req,res})
})
app.post("")

app.listen(3001, () => {
    console.log("app listen on port ", 3001 )
})