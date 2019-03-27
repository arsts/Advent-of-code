const fs = require('fs');

const data = fs
    .readFileSync('../input.txt', 'utf8', )
    .trim()
    .split('\r\n');
const result = data.reduce((total, dimensions) => {
    const sides = dimensions.split('x').map(a => parseInt(a)).sort((a,b) => a > b ? 1 : -1);
    const ribbonWrap = sides[0] + sides[0] + sides[1] + sides[1];
    const ribbonBow = sides[0] * sides [1] * sides[2];
    return total + ribbonWrap + ribbonBow;

}, 0);

console.log(result);
