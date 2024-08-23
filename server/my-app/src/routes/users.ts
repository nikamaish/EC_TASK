// routes/userRoutes.ts

import { Hono } from 'hono';
import { createNewUser, getUser } from '../controllers/users';

const router = new Hono();

router.post('/users', createNewUser);
router.get('/getusers/:id', getUser);

export default router;
