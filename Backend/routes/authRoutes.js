import {Router} from 'express';
import { signup, login, logout, getMe } from '../controllers/authControllers.js';
import TryCatch from '../middlewares/TryCatch.js';
import { auth } from '../middlewares/auth.js';

const router = Router();

router.post("/signup", TryCatch(signup));
router.post("/login", TryCatch(login));
router.post("/logout", TryCatch(logout));
router.get("/me", auth, TryCatch(getMe));

export default router;