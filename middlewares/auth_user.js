module.exports = function(request, response, next) {
    if (!request.originalUrl.includes("task")) return next();

    if (request.session.userId) return next();

    response.redirect('/sessions');
}