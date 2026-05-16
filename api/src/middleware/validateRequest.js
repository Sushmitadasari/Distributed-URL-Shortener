import { isValidUrl } from "../utils/validation.js";

export function validateShortenRequest(req, res, next) {
  const { url, strategy } = req.body;

  if (!url || !isValidUrl(url)) {
    return res.status(400).json({
      success: false,
      message: "Invalid URL"
    });
  }

  if (!["hash", "snowflake"].includes(strategy)) {
    return res.status(400).json({
      success: false,
      message: "Invalid strategy"
    });
  }

  next();
}