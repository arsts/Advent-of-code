const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8', ).trim().split('\r\n');
const result = data.reduce((total, dimensions) => {
    const dimension = dimensions.split('x')
    console.log(dimension);
    
},0 );

