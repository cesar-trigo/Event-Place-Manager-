export const httpResponse = (res, statusCode, data) => {
  return res.status(statusCode).json({ data });
};
