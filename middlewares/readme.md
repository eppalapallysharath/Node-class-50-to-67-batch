// middleware syntax
// Middleware are functions that execute during the request-response cycle in an Express application.
// they access : req, res, next

// function fun(req, res, next){
//     if(err){
//         res.send(req.body)
//     }else{
//         next()
//     }
// }

// types of middlewares
// 1. app level middlewares, 2. builtin middleware 3. router level middleware  4.custom middleware, 5. error handling middleware

// to register any middleware we  use app.use
// app.use("path(optional)", middleware functions)
// app.get("path", function)






