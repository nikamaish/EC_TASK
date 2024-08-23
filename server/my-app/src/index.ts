import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import pool from './db/db';
import { config } from 'dotenv'
import axios from 'axios'
import { cors } from 'hono/cors'
import userRoutes from './routes/users'

config()

const app = new Hono()

app.use('/*', cors())

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

app.get('/', (c) => {
  // c is likely a parameter or variable representing the response object in a web server framework. It is commonly used to send responses back to the client.
return c.text('Hello, World!')
})

app.route('/done', userRoutes);

// app.get('/users', async (c) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM github');
//     return c.json(rows);  // Send JSON response for successful data retrieval
//   } catch (error) {
//     return c.text('Failed to retrieve data', 500);  // Send plain text with status code
//   }
// });


app.get('/auth/github/callback', async (c) => {
  const code = c.req.query('code')
  if (!code) {
    return c.text('No code provided.', 400)
  }

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: clientID,
      client_secret: clientSecret,
      code: code,
    }, {
      headers: {
        'Accept': 'application/json',
      },
    })

    const accessToken = tokenResponse.data.access_token
    if (!accessToken) {
      return c.text('Failed to get access token.', 400)
    }

    // Fetch user profile data from GitHub
    const userProfileResponse = await axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${accessToken}`,
        'Accept': 'application/json',
      },
    })

    const userProfile = userProfileResponse.data

    // Send user profile data to the frontend
    return c.json({
      message: 'GitHub account connected successfully!',
      userProfile: userProfile,
    })

  } catch (error) {
    console.error('Error:', error)
    return c.text('Error connecting GitHub account.', 500)
  }
})

const port = process.env.PORT || 5000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port: Number(port)
})