import { asyncHandler } from "../Utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
  return res.status(200).json({
    message: "first time",
  });
});

export { registerUser };
