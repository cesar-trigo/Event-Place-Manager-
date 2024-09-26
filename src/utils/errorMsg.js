export const errorMsg = (errorSite, errorMessage) => {
  return `
  Date:  ${new Date().toUTCString()} 
  Error: ${errorMessage}
  sitie: ${errorSite}`;
};
