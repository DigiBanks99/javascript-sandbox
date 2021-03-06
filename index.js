const array = require('./array');
const PromiseDemo = require('./promises');
const observables = require('./observables');

function run() {
    console.log('Running...');
    if (process.argv) {
        handleArgs(process.argv);
    } else {
        handleArray();
    }
}

function handleArgs(argv) {
    if (argv && argv.length <= 2) {
        handleArray(); return;
    }

    argv.forEach((arg, index) => {
        if (index < 2)
            return;
        switch (arg.toLowerCase()) {
            case 'promise': handlePromises(); return;
            case 'array': handleArray(); return;
            case 'observable': handleObservable(); return;
            default: console.error(`Unsupported argument: ${arg}`); return;
        }
    });
}

function handlePromises() {
    var promiseDemo = new PromiseDemo();
    console.log('Running changingPromises...');
    promiseDemo.chainingPromises().then((result) => {
        console.log(`Final object:\n${JSON.stringify(result, null, 2)}`);
    });
    console.log('changingPromises completed.');

    console.log('Running changingPromises2...');
    promiseDemo.chainingPromises2().then((result) => {
        console.log(`Final object:\n${JSON.stringify(result, null, 2)}`);
    });
    console.log('changingPromises2 completed.');
}

function handleArray() {
    var myArray = new array([2, 5, 2, 4, 7, 'a', x => 44]);
    myArray.simulateMap();
    myArray.testSpreadOperator();
}

function handleObservable() {
    console.log('Running observables...');
    observables();
}

run();
