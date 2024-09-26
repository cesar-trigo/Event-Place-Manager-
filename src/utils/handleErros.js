import { ERROR_TYPES } from "./eErrors.js";

export const handleErros = (error, req, res, next) => {
  console.log(`${error.Msg ? error.Msg : error.message}`);

  switch (error.code) {
    case ERROR_TYPES.AUTHENTICATION:
      return res.status(401).json({ error: `${error.message}` });

    case ERROR_TYPES.AUTHORIZATION:
      return res.status(403).json({ error: `${error.message}` });

    case ERROR_TYPES.INVALID_ARGUMENTS:
      return res.status(400).json({ error: `${error.message}` });

    case ERROR_TYPES.NOT_FOUND:
      return res.status(404).json({ error: `${error.message}` });

    case ERROR_TYPES.CONFLICT:
      return res.status(409).json({ error: `${error.message}` });

    default:
      return res.status(500).json({ error: "Internal Server Error - Contact Administrator" });
  }
};
