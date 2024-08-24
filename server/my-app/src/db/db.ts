import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config(); // Load environment variables

const pool = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// The exclamation mark (!) is used in TypeScript to assert that a value is not null or undefined. In this code, it is used to assert that the environment variables (process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, and process.env.DB_NAME) have been defined and are not null.

// Test the connection
// The async keyword indicates that the function will contain asynchronous operations

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to MySQL database!');
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error connecting to MySQL database:', error.message);
    } else {
      console.error('Unknown error occurred:', error);
    }
  }
})(); // () it will invoke the function immediately

export default pool;
