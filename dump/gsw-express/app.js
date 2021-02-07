const express = require("express");
const cookieParser = require("cookie-parser");
const cookieValidator = require("./cookie-validator");
const app = express();
const port = 3000;

var myLogger = function (req, res, next) {
    console.log("LOGGED");
    next();
};

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

async function validateCookies(req, res, next) {
    await cookieValidator(req.cookies);
}

app.use(myLogger);
app.use(requestTime);
app.use(cookieParser());
app.use(validateCookies);

app.get("/", (req, res) => {
    var responseText = "Hello World!<br/>";
    responseText += "<small>Request at: " + req.requestTime + "</small>";
    res.send(responseText);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
