export function logger(rec, res, next) {
  const requestTime = new Date();

  console.log(`
    Method --> ${rec.method}
    Endpoint --> ${rec.url}
    Date --> ${requestTime}`);

  next();
}
