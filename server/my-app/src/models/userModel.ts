import pool from '../db/db';  // Import the database pool

export interface User {
  id?: number; 
  name: string; 
  email: string;
  password: string;
  profilePicture?: string;
  bio?: string;
  skills?: string;
  location?: string;
}

// Function to create a new user in the database
// The purpose of this function is to create a user based on the provided userData
export const createUser = async (userData: User): Promise<number> => {
  const { name, email, password, profilePicture, bio, skills, location } = userData; // destructuring
  try {
    const [result] = await pool.query( // query the database
      'INSERT INTO users (name, email, password, profilePicture, bio, skills, location) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, email, password, profilePicture, bio, skills, location]
    );
    return (result as any).insertId; // Extract the inserted ID
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Error creating user');
  }
};

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    // Perform the query
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    
    // Type assertion to ensure TypeScript knows rows is an array
    const users = rows as User[]; 
    
    // Return the first user if found, otherwise null
    return users[0] || null;
  } catch (error) {
    console.error('Error retrieving user:', error);
    throw new Error('Error retrieving user');
  }
};