let mysql=require("mysql");
let connData={
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"employeedb"
};

function getConnection(){
  console.log("Connect!!");
  return mysql.createConnection(connData);
};
module.exports.getConnection=getConnection;