const { Console } = require('console');
const path = require('path');
const FilePath = path.join('/content','text.txt');
console.log(FilePath);

const base = path.basename(FilePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','text.txt');
console.log(absolute)