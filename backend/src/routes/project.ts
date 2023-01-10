import express from "express";
import getLinks from "../controllers/link/get-links";
import { addLink, deleteLink, toggleLink } from "../controllers/links";

const router = express.Router();

router.post("/", addLink);
router.get("/", getLinks);
router.post("/toggle", toggleLink);
router.delete("/", deleteLink);

export default router;
