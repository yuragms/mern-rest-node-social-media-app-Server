import express from "express";
import { createPost } from "../Controllers/PostController";
const router = express.Router();

router.get("/", createPost);

export default router;
