const  errorHandler = ( err, req, res, next) => {

    console.log("got to error handler")
    console.log(err)
    if(res.status(500)) {
        res.json({
            message: err,
            code: 500,
            stack: res.stack
        })

    }

    if(res.status(401)) {

        res.json({
            message: err.message,
            code: 401,
            stack: res.stack
        })

    }

    if(res.status(400)) {

        res.json({
            message: "Bad request",
            code: 400,
            stack: res.stack
        })

    }

    if(res.status(404)) {

        res.json({
            message: "Not found",
            code: 404,
            stack: res.stack
        })


    }

        next();
}


module.exports = errorHandler;


