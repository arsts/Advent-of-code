const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        throw err
    } else {
        const regex = new RegExp('x|[]|\r\n')
        const file = data.split(regex);
        
       
        console.log(file);
    }
});