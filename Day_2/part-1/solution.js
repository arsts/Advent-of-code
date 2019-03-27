const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8', ).trim().split('\r\n');
const result = data.reduce((total, dimensions) => {
    const dimension = dimensions.split('x')
    const l = dimension[0];
    const w = dimension[1];
    const h = dimension[2];
    const extraPaper = Math.min(l * w, w * h, h * l)
    // console.log(extraPaper);
    
    return total + (2 * l * w ) + (2 * w * h) + (2 * h * l) + extraPaper;   
},0 );

console.log(result);
