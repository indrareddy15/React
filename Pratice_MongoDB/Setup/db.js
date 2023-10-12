const { MongoClient } = require("mongodb");

let dbConnection;
let uri = 'mongodb://localhost:27017/booksstore'

const conntectDB = (callBackFun) => {
    MongoClient.connect(uri)
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