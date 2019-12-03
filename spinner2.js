const process = require('process');

const chars = ['|', '/', '-', '\\'];
let i = 0;

while (i < 100) {
  let index = i++ % chars.length;
  setTimeout(() => process.stdout.write('\r' + chars[index]), i * 100);
}
