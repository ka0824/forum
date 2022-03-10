import { Router } from "express";
import forumController from "../controllers/forumController";

const forumRouter = Router();

forumRouter.get("/get", forumController.get);
forumRouter.post("/post", forumController.post);
forumRouter.put("/patch", forumController.put);
forumRouter.delete("/delete", forumController.delete);

export default forumRouter;