const fs = require("fs");

let contents = fs.readFileSync("./dic.json", "utf-8");
contents = JSON.parse(contents);
module.exports = { contents };
