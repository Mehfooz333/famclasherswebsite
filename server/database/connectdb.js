const mysql = require('mysql2');
const dbDetails = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "influencer"

});
dbDetails.connect((error) =>
{
    if (error) {

        console.log(error);
    } else {

        console.log("DB Connection Successful");
    }
})

module.exports = dbDetails;