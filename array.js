module.exports = class MyArray {
    constructor(value = []) {
        this.value = value;
    }

    simulateMap() {
        console.log('Running simulateMap...');
        this.value.map(v => console.log(v));
        console.log('simulateMap ended.');
    }

    testSpreadOpperator() {
        console.log('Running testSpreadOperator...');
        console.log(JSON.stringify({ ...this.value }, null, 2));
        console.log('testSpreadOperator ended.');
    }
}
