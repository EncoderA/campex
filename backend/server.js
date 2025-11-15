import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

// Middlewares
app.use(cors());
app.use(express.json());

// Simple API route
app.get("/", (req, res) => {
  res.json({ message: "Backend API running successfully 🚀" });
});

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/campex";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Socket.IO setup (for chat/events)
io.on("connection", (socket) => {
  console.log("🟢 Socket connected:", socket.id);

  socket.on("chat:message", (msg) => {
    io.emit("chat:message", msg);
  });

  socket.on("disconnect", () => {
    console.log("🔴 Socket disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
