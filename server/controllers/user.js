const app = require('../index');

function addUser(req, res){
    // retrieving my db and setting it equal to a variable //
    let db = req.app.get('db');
    // destructuring req.body and creating variables to hold the values for my db //
    let { phone_num, full_name, email, password } = req.body;
    

// add the user into the database -> res = the new user added
    return db.users.insert({phone_num, full_name, email, password})

    // the response in the .then() should be unique to what you are getting back so the system can distinguish between the "res" in the parent function and the response in the inner function, in this case, we are going to be getting a user back. //
       .then((user) => {
           console.log(user)
          res.status(200).send(user)
       })
}

function fetchUser(req, res){
    let db = req.app.get('db');
    let { email, password } = req.body;

    return db.users.findOne({email: email} && {password: password})
        .then((user) => {
            res.status(200).send(user);
        })
}

module.exports = {
    addUser,
    fetchUser
}