import { ERROR_TYPES } from "./eErrors.js";
import { errorMsg } from "./errorMsg.js";

export class CustomError {
  static createError(site, message, code = ERROR_TYPES.INTERNAL_SERVER_ERROR) {
    const Msg = errorMsg(site, message);
    const error = new Error(message);
    error.code = code;
    error.Msg = Msg;
    throw error;
  }
}
