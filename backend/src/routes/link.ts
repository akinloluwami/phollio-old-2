import express from "express";
import {
  addLink,
  deleteLink,
  getLinks,
  toggleLink,
} from "../controllers/links";

const router = express.Router();

router.post("/", addLink);
router.get("/", getLinks);
router.post("/toggle", toggleLink);
router.delete("/", deleteLink);

export default router;
