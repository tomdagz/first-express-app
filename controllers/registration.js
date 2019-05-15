const User = require('../models').User;

module.exports = {
    new: (request, response) => {
        response.render('registrations/new');
    },
    create: (request, response) => {
        let data = {
            email: request.body.email,
            password: request.body.password
        }

        User.create(data)
            .then(result => {
                response.json(result);
            })
            .catch(err => {
                response.json(err);
            });
    }
}