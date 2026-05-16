import { generateHashCode } from "../services/hashStrategy.js";
import { generateSnowflakeId } from "../services/snowflakeStrategy.js";
import { saveUrl } from "../services/urlService.js";
import { env } from "../config/env.js";

export async function shortenUrl(req, res, next) {
  try {
    const { url, strategy, expires_at } = req.body;

    let shortCode;

    if (strategy === "hash") {
      shortCode = await generateHashCode(url);
    } else {
      shortCode = generateSnowflakeId();
    }

    await saveUrl({
      short_code: shortCode,
      original_url: url,
      strategy,
      expires_at
    });

    res.status(201).json({
      success: true,
      short_url: `${env.BASE_URL}/${shortCode}`,
      short_code: shortCode,
      strategy
    });
  } catch (err) {
    next(err);
  }
}