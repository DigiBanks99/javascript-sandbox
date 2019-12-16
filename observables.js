const Subject = require('rxjs').Subject;
const tap = require('rxjs/operators').tap;
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

module.exports = function observables() {
    xhrGet('http://localhost:5000/api/animal')
        .pipe(
            tap(result => {
                console.log('tapped result', {
                    ...result[0],
                    number: result[0].number * 33
                });
            })
        )
        .subscribe(
            result => console.log(result),
            error => console.error(error)
        );
};

function xhrGet(apiUrl) {
    const subj = new Subject();
    const http = new XMLHttpRequest();
    http.open('GET', apiUrl, true);
    http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status == 200) {
                subj.next(JSON.parse(http.responseText));
                subj.complete();
            } else {
                subj.error(http.statusText);
            }
        }
    };
    http.send();
    return subj;
}
