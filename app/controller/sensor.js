const { gatDataSensor, postDataSensor } = require("../../config/mysql")

const getData =  ({req, res}) => {
    gatDataSensor({req,res})
}
const postData = (req,res) => {
    postDataSensor({req,res})
}


module.exports = {getData, postData}