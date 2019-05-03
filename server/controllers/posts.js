const app = require('../index');

function fillFeed(req, res){
    console.log('fillFeed hit')
    let db = req.app.get('db');

    // const {img, post_desc} = req.body;

    return db.query('select * from post', function(err, req){
        console.log(err);
        console.log(req);
    }).then( post => {
        res.status(200).send(post);
    })

}

module.exports = {
   fillFeed
}