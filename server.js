require("dotenv").config();
let http = require("http");
let express = require("express");
const dbConnect = require("./db/db.connect");
let routes = require("./routes");
const cookieParser = require("cookie-parser");
let app = express();

//Cookies
app.use(cookieParser())


app.set("view engine", "ejs")

//body:-
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Routes:-
app.use("/v1", routes)

app.get("/", (req, res) => {
    res.render("partials/login")
})

//Database Connection:-
dbConnect;

//Server Setup:-
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server Started Successfully" ${process.env.PORT}`);
})