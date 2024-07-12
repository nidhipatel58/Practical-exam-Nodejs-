let mongoose = require("mongoose");
const { ENUM } = require("mysql/lib/protocol/constants/types");


let userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    password: {
        type: Number,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    role: {
        type: String,
        ENUM: ["user", "admin"],
        default: "user"
    }
});


let user = mongoose.model("User", userSchema);
module.exports = user;