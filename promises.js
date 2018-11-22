module.exports = class PromiseDemo {
    chainingPromises() {
        return this.promiseToReturnComplexObject(null, 1)
            .then((result) => this.promiseToReturnComplexObject(result, 2))
            .then((result) => this.promiseToReturnComplexObject(result, 3))
            .then((result) => this.promiseToReturnComplexObject(result, 4))
            .then((result) => this.promiseToReturnComplexObject(result, 5))
    }

    chainingPromises2() {
        return this.promiseToReturnComplexObject(null, 1)
            .then((result) => {
                return this.promiseToReturnComplexObject(result, 2);
            })
            .then((result) => {
                return this.promiseToReturnComplexObject(result, 3);
            })
            .then((result) => {
                return this.promiseToReturnComplexObject(result, 4);
            })
            .then((result) => {
                return this.promiseToReturnComplexObject(result, 5);
            })
    }

    promiseToReturnComplexObject(oldObject, uniqueId) {
        return new Promise((resolve) => {
            let objectJson = '';
            if (oldObject) {
                objectJson = ` Old value:\n${JSON.stringify(oldObject, null, 2)}`;
            }
            console.log(`Promise for ${uniqueId}.${objectJson}`);
            resolve({
                id: uniqueId,
                data: btoa(uniqueId.toString())
            });
        })
    }
}

function btoa(value) {
    return Buffer.from(value).toString('base64');
}
