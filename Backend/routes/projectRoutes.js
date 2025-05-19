import express from 'express';
import { auth } from '../middlewares/auth.js';
import { getProjects, createProject, deleteProject } from '../controllers/projectControllers.js'
import TryCatch from '../middlewares/TryCatch.js';
import checkPlan from '../middlewares/plan.js'

const router = express.Router();

router.get("/user", auth, TryCatch(getProjects));
router.post("/create", auth, checkPlan, TryCatch(createProject));
router.delete("/:id", auth, TryCatch(deleteProject));


export default router;