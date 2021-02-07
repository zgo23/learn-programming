async function cookieValidator(cookies) {
    try {
        await externalValidateCookie(cookies.testCookie);
    } catch {
        throw new Error("Invalid cookies");
    }
}

module.exports = cookieValidator;
