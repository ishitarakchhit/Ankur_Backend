const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
dotenv.config({ path: __dirname + "/.env" });

const chats = require("./data/Data");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());

const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute.js");
const messageRoute = require("./routes/messageRoute");


const connectDB = require("./config/dbconnection");
connectDB();

const port = process.env.PORT || 7070;

app.use(express.json());

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
});

app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);



//------------------Deployment------------------//

const __dirname1 = path.resolve();
//console.log("dep: ", process.env);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/frontend/build")));
    console.log("Running in production mode");
    console.log(path.join(__dirname1, "/frontend/build"));
} else {
    app.get("/", (req, res) => {
        res.send("API is running");
    });
}



app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, console.log(`Server running on port ${port}`));

const io = require("socket.io")(server, {
    pingTimeout: 70000,
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("connected to socket io");
    socket.on("setup", (userData) => {
      socket.join(userData._id);
      console.log(userData._id);
      socket.emit("Connected");
    });
    socket.on("join chat", (room) => {
      socket.join(room);
      console.log("User joined Room :" + room);
    });
    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
  
    socket.on("new message", (newMessageRecieved) => {
      var chat = newMessageRecieved.chat;
      if (!chat.users) return console.log("chat.users not defined");
      chat.users.forEach((user) => {
        if (user._id == newMessageRecieved.sender._id) return;
        socket.in(user._id).emit("message recieved", newMessageRecieved);
      });
    });
  
    socket.off("setup", () => {
      console.log("USER DISCONNECTED");
      socket.leave(userData._id);
    });
});
  