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

const postDataSensor = ({req,res}) => {
    console.log(req)  
  /*const querySql = "insert into datasensor (valueSensing) values ("+ data.value +");";
  con.query(querySql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });*/
}

module.exports = {gatDataSensor, postDataSensor}
