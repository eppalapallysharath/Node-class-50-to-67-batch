function errorMiddleware(err, req, res, next){
    console.log("global error middleware", err)
    res.status(err.status).send(err.message)
}
module.exports = {errorMiddleware}