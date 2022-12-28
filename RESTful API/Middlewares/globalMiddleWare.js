//Step: 11 Global Middleware for each API
const globalMiddleware = (req, res, next) => {
  console.log(req.method, req.url, new Date().toDateString());
  next();
};

module.exports = globalMiddleware;
