import express from "express";
import {
  addLink,
  deleteLink,
  getLinks,
  linkClick,
  toggleLink,
} from "../controllers/links";

const router = express.Router();

router.post("/", addLink);
router.get("/", getLinks);
router.post("/toggle", toggleLink);
router.delete("/", deleteLink);
router.post("/click", linkClick);

export default router;
