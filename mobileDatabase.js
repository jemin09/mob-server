let mysql=require("mysql");
let connData={
  host:"localhost",
  user:"root",
  password:"",
  database:"employeedb",
  port:"3000"
};

function getConnection(){
  console.log("Connect!!");
  return mysql.createConnection(connData);
};
module.exports.getConnection=getConnection;