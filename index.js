const ig = require("./instagram");

const username = "username";
const password = "password";

(async () => {
  await ig.initialize();

  await ig.login(username, password);

  debugger;
})();
