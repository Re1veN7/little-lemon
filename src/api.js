// Little Lemon course API: a reviewed copy kept in this repo instead of loading it live.
// Source: https://raw.githubusercontent.com/courseraap/capstone/main/api.js
// Reviewed: 2026-10-08 (SHA-256 of the original: 336aa170cfe077d4b7495c886c95d4fac55a66f8b018641f4096360265ff9e1b)
// Only change: added export (line endings also converted from CRLF to LF).

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
};
