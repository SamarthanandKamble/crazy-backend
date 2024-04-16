const asyncHandler = (reqHandler) => {
  return (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err_1) =>
      next(err_1)
    );
  };
};

export { asyncHandler };
