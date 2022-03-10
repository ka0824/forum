import express from "express";
import forumRouter from "./routers/forumRouter";

const app = express();

app.use(express.json());

app.use("/forum", forumRouter);

app.listen("3001", () => {
    console.log("서버 연결 완료");
})