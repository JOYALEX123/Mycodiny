const path = require('path');

let dir = "C:/Packt";
let otherDir = "/assets/images/";
let file = "path.js";


console.log(path.dirname(dir + file));
console.log(path.extname(file));
console.log(path.join(dir, otherDir + file));