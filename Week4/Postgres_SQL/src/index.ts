import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();
const dbUrl = process.env.postgres_string;
const client = new Client({
    connectionString: dbUrl
});
async function createTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE clients (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(50) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)
            `);
console.log(result);
        } 

//Insert data into tables
async function insertData() {
    await client.connect();
    const insertQuery = " INSERT INTO users (username , email, password) VALUES ('username2', 'naveen@gmail.com', '123321')"
    const res = await client.query(insertQuery);

}

insertData()
//createTable()