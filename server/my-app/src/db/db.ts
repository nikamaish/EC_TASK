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

// Test the connection
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
})();

export default pool;
