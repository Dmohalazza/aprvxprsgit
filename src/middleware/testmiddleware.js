const declaremiddleware = (request, response, next) => {

    console.log("export test middleware")
    next();
}

module.exports = declaremiddleware;