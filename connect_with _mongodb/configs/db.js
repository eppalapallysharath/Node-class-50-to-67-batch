const {MongoClient} = require("mongodb")
require("dotenv").config()

const client = new MongoClient(process.env.mongouri)

let database 
async function dbConnection(){

    try {
        await client.connect()
        database = client.db("native-db")
        database.createCollection("users")
        database.createCollection("todos")
        console.log("database connected successfully and collections created successfully ")
    } catch (error) {
        console.log("error while connecting database")
        console.log(error)
    }
    
}

async function getData (){
    const a = await database.collection("users").find().toArray()
    console.log("db user data", a, )
    return a    
}


async function create(body) {
    const data = await database.collection("users").insertOne(body)
}

module.exports = {dbConnection, getData, create}