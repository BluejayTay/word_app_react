const DEV_URL = "http://localhost:3000/";
const PROD_URL = "https://werd-nerd-2.herokuapp.com/";
export const API_ROOT =
  process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL;
console.log(process.env.NODE_ENV);
