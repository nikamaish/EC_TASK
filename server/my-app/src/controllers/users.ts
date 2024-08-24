
// controllers/users.ts

import { Context } from 'hono';
import { createUser, User, getUserById } from '../models/userModel';

export const createNewUser = async (c: Context) => {
  try {
    const userData: User = await c.req.json(); // Parse JSON body
    const userId = await createUser(userData); // Create the user in the database
    return c.json({ message: 'User created successfully', userId }, 201);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error creating user:', error.message);
      return c.json({ message: 'Error creating user' }, 500);
    } else {
      console.error('Unexpected error:', error);
      return c.json({ message: 'Unexpected error' }, 500);
    }
  }
};

export const getUser = async (c: Context) => {
  const userId = c.req.param('id'); // Get the user ID from the request parameters
  
  if (!userId) {
    return c.json({ message: 'User ID is required' }, 400); // Bad Request if no ID is provided
  }

  try {
    const user = await getUserById(Number(userId)); // Fetch the user data by ID
    if (!user) {
      return c.json({ message: 'User not found' }, 404); // Not Found if user does not exist
    }
    return c.json(user); // Send user data as JSON
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error retrieving user:', error.message);
      return c.json({ message: 'Error retrieving user' }, 500); // Internal Server Error
    } else {
      console.error('Unexpected error:', error);
      return c.json({ message: 'Unexpected error' }, 500); // Internal Server Error
    }
  }
};
