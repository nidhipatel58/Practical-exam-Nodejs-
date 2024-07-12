let mongoose = require("mongoose");

function dbConnect() {
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log("Database connect success!");
        })
        .catch((err) => {
            console.error("Database connection error:", err);
        });
}

module.exports = dbConnect;