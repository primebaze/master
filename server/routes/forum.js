import express from "express";
import { getConversationsByCourse, addConversation, deleteConversation } from "../controllers/forum.js";
const router = express.Router();

router.get("/get-conversation/:course",  getConversationsByCourse);
router.post("/add-conversation", addConversation);
router.delete("/delete-conversation/:author", deleteConversation);
export default router;
