const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Home Route: list all messages
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// Form route: show new message form
indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Handle form submission
indexRouter.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

// Single message details route ("Open" link)
indexRouter.get("/message/:id", (req, res) => {
  const messageId = Number(req.params.id);
  const message = messages[messageId];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { title: "Message Details", message: message });
});

module.exports = indexRouter;
