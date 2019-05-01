const app = require('../index');

function addUser(req, res){
    let db = req.app.get('db');
    let { phone_num, full_name, email, password} = req.body;
    
    return db.users.find({ email })
        .then(() => {
            return db.users.insert({phone_num, full_name, email, password})
                .then((res) => {
                    res.status(200)
                })
        })
}