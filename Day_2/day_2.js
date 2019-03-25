const fs = require('fs');

fs.readFile('./input.txt',(err, data) => {
    if (err) {
        throw err
    } else {
        const file = data.toString();

    }
    console.log(data);
});