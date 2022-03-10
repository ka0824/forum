import express from "express";

const app = express();

app.listen("3001", () => {
    console.log("서버 연결 완료");
})