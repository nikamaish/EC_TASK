
import { Hono } from 'hono';
import { createNewUser, getUser } from '../controllers/users';

const router = new Hono();

router.post('/newuser', createNewUser);
router.get('/getuser/:id', getUser);

export default router;
