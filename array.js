module.exports = class MyArray {
    constructor(value = []) {
        this.value = value;
    }

    simulateMap() {
        console.log('simulating map');
        this.value.map(v => console.log(v));
    }
}
