const users = [
    { id: 1, firstName: "John", lastNAme: "Doe"},
    { id: 2, firstName: "James", lastNAme: "Bond"}
]

const { request } = require("express");



exports.createUser = (request, response) => {
    users.push({...request.body});
    response.status(200).json({message: "Successfully created user", users});
};