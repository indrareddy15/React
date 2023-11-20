const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,

        // stack trace will some aditional information about if that is production mode only
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

module.exports = { errorHandler }