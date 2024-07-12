let { userSchema } = require("../models");


let register = (body) => {
    console.log(body, "res");
    return userSchema.create(body);
}

let getUserById = (id) => {
    return userSchema.findById(id)
}

let findUser = (email) => {
    return userSchema.findOne({ email })
}

let deleteUser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let updateUser = (body, id) => {
    return userSchema.findByIdAndUpdate(id, body)
}


module.exports = { register, getUserById, deleteUser, updateUser, findUser }