const app = require('../index');

function addUser(req, res){
    // retrieving my db and setting it equal to a variable //
    let db = req.app.get('db');
    // destructuring req.body and creating variables to hold the values for my db //
    let { phone_num, full_name, email, password } = req.body;
    

// add the user into the database -> res = the new user added
    return db.users.insert({phone_num, full_name, email, password})
       .then((res) => {
           console.log(res)
          res.status(200).send(res)
       })
}

module.exports = {
    addUser
}