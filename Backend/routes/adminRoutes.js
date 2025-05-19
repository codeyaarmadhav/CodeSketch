import {Router} from 'express';
import {auth} from '../middlewares/auth.js';
import isAdmin from '../middlewares/isAdmin.js';
import { allProjects, allUsers, changePlan, userActivity } from '../controllers/adminControllers.js';

const router = Router();

router.get("/users", auth, isAdmin, allUsers);
router.get("/projects", auth, isAdmin, allProjects);
router.post("/deactiveuser", auth, isAdmin, userActivity);
router.post("/changeplan", auth, isAdmin, changePlan);

export default router;
