const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("./generated/prisma");
// const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();
dotenv.config();
const app = express();
app.use(express.json());

async function createPost(author, title, content) {
  const user = await prisma.post.create({
    data: {
      author: author,
      title: title,
      content: content,
      cover: "Test_Image",
      date: new Date(),
    },
  });
}

app.get("/post", async (req, res) => {
  try {
    const allPost = await prisma.post.findMany();
    res.send(allPost);
  } catch (error) {
    res.json("there was an error:", error.message);
  }
});

app.get("/post/:id", async (req, res) => {
  try {
    const reqId = Number(req.params.id);
    const thePost = await prisma.post.findMany({
      where: { id: reqId },
    });
    res.send(thePost);
  } catch (error) {
    res.json("there was an error:", error.message);
  }
});

app.post("/post/:id", async (req, res) => {
  try {
    const reqId = Number(req.params.id);
    const { author, title, content } = req.body;
    const thePost = await prisma.post.update({
      where: { id: reqId },
      data: {
        author: author,
        title: title,
        content: content,
        cover: "Test_Image",
        date: new Date(),
      },
    });
    res.send(thePost);
  } catch (error) {
    res.json("there was an error:", error.message);
  }
});

app.post("/post", async (req, res) => {
  const { author, title, content } = req.body;
  //   const input = req.body
  try {
    await createPost(author, title, content);
    res.json("New post added to the database!");
  } catch (error) {
    res.json("there was an error:", error.message);
  }
});




app.listen(3333, () => console.log("running on 3333"));

// const prisma = new PrismaClient()
