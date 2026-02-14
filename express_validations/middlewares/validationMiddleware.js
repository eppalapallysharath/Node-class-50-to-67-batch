const {validationResult} = require("express-validator")
exports.validationMiddleware = (req, res, next) => {
    const valError = validationResult(req);
    if (!valError.isEmpty()) {
      return res.status(400).json({ validation_error: valError.errors });
    } else {
      next();
    }
}