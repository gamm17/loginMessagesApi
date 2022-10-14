import { Router } from 'express';
import { getMessages } from '../controllers/product';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken, getMessages)

export default router;