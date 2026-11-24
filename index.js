const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware tp parse form of data into req.body
app.use(express.urlencoded({extended: true }));

// Serve static CSS/assets from public/
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Mini Message Board running at http://localhost:${PORT}/`);
})