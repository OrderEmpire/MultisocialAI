import express from "express";

const app = express();

app.use("/api/auth", authRoutes);