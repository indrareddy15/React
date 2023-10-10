const { MongoClient } = require("mongodb");

let dbConnection;
const conntectDB = () => {
    MongoClient.connect('mongodb://localhost:27017/booksstore')
        .then((client) => {
            dbConnection = client.db();
        })
}

const getDB = () => {

}

module.exports = {
    conntectDB,
    getDB
}