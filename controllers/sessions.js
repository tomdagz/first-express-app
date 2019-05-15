const User = require('../models').User;

module.exports = {
    new: (request, response) => {
        response.render('sessions/new');
    },
    create: (request, response) => {
        User.login(request.body.email, request.body.password)
            .then(user => {
                response.json(user);
            })
            .catch(err => {
                console.log(err);
                response.json(err);
            });
    }
}