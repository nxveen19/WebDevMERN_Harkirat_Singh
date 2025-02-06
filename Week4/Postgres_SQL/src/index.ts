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
// this can lead to sql injection
insertData()

//correct way to do it
async function insertData2(username: string, email: string, password: string) {
    await client.connect();
    const insertQuery = " INSERT INTO users (username , email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);

}
//createTable()

// PostgreSQL never treats values array as part of SQL syntax.
// Values are sent separately and mapped internally before execution.
// SQL injection is prevented because values are treated as raw data, not executable code.
// client.query() ensures safe handling by keeping the SQL structure and values separate.