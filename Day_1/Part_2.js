// FS module setup
const fs = require('fs');

// variable to store floor

fs.readFile('./Puzzleinput.txt', (err, data) => {
    console.time('funchallenge');
    const file = data.toString()
    const fileArray = file.split('');
    let floorNum = 0;
    let position = 0;
    fileArray.some(char => {
        if (char === '('){
            floorNum += 1 
        } else if (char === ')') {
            floorNum -= 1
        }
        position ++
        return floorNum < 0;
    })

    
        
        
        
        // console.log(enterBase);
        

        console.timeEnd('funchallenge');
        console.log(floorNum);
        console.log(position);
})
