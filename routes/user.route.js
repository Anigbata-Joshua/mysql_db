import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAllUsers)

router.post('/', createUser)
router.get('/:user_id', getUserById);

export default router;