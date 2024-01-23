const os = require("os");

console.log(os);
console.log(os.arch());
console.log(os.freemem() / (1024 * 1024 * 1024)); //in gb
console.log(os.totalmem() / (1024 * 1024 * 1024)); //in gb
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());
