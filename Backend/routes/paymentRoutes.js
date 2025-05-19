import {Router} from 'express';
import { getKey, paymentProcess, paymentVerification } from '../controllers/paymentControllers.js';
import { auth } from '../middlewares/auth.js';
import TryCatch from '../middlewares/TryCatch.js';

const router = Router();

router.post("/process", auth, TryCatch(paymentProcess));
router.get("/key", auth, TryCatch(getKey));
router.post("/verification", auth, TryCatch(paymentVerification));

export default router;