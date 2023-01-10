import express from "express";
import {
  addProject,
  deleteProject,
  getProjects,
  toggleProject,
} from "../controllers/project";

const router = express.Router();

router.post("/", addProject);
router.get("/", getProjects);
router.post("/toggle", toggleProject);
router.delete("/", deleteProject);

export default router;
