const { MongoClient } = require("mongodb");

let dbConnection;
const conntectDB = (callBackFun) => {
    MongoClient.connect('mongodb://localhost:27017/booksstore')
        .then((client) => {
            dbConnection = client.db();
            return callBackFun()
        })
        .catch((err) => {
            console.log(err);
            return callBackFun();
        })
}

const getDB = () => {
    return dbConnection
}

module.exports = {
    conntectDB,
    getDB
}