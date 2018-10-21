const array = require('./array');

function run() {
    console.log('Running...');
    var myArray = new array([2,5,2,4,7,'a', x => 44]);
    myArray.simulateMap();
}

run();
