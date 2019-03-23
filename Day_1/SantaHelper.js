// FS module setup
const fs = require('fs');

// variable to store floor
let floorNum = 0;


fs.readFile('./Puzzleinput.txt', (err, data) => {
    console.time('funchallenge');
    let enterCount = 0;
    if (err) {
        throw err
    } else {
        const file = data.toString();
        for (let i = 0; i < file.length; i++) {
            if (file.charAt(i) === '(') {
                floorNum += 1;
            } 
            else if (file.charAt(i) === ')') {
                floorNum -= 1;
            }
        }
        console.log(floorNum);

    }
    console.timeEnd('funchallenge');
})