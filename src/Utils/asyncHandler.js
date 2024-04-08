const asyncHandler = (reqHandler) => (err, req, res, next) => {
  Promise.resolve(reqHandler(err, req, res, next)).catch((err) => next(err));
};

export { asyncHandler };
