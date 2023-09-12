const express = require("express");
const path = require("path");
const FyersAPI = require("fyers-api-v3");

const app = express();
const PORT = process.env.PORT || 3286;

// Create a new instance of FyersAPI
var fyers = new FyersAPI.fyersModel();

// Set your APPID obtained from Fyers (replace "xxx-1xx" with your actual APPID)
fyers.setAppId("9WC00P66KT-100");

// Set the RedirectURL where the authorization code will be sent after the user grants access
fyers.setRedirectUrl(
  "https://collective-finance-dashboard-ee823694d892.herokuapp.com/"
);

// Define the authorization code and secret key required for generating access token
// const authcode = "eyJxxxx"; // Replace with the actual authorization code obtained from the user
// const secretKey = "U1Q0W3G7SB"; // Replace with your secret key provided by Fyers

// fyers
//   .generateAuthCode({ secret_key: secretKey, auth_code: authcode })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

app.use(
  express.static(path.join(__dirname, "../client/collective-fetch-api/build"))
);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/collective-fetch-api/build", "index.html")
  );
});

app.get("/api", (req, res) => {});

app.get("/api/redirect/success", (req, res) => {
  res.redirect("/");
  console.log(req.query);
});

app.get("/api/auth", (req, res) => {
  var generateAuthcodeURL = fyers.generateAuthCode();
  console.log(generateAuthcodeURL);
  res.json({ url: generateAuthcodeURL });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
